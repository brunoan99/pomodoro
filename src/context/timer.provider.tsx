"use client";

import { GetDisplayTimeUseCase, PassASecondUseCase, SetNextStateUseCase, SetTickingUseCase } from "@/@core/application/timer";
import { Timer } from "@/@core/domain/entities/Timer";
import { Registry, container } from "@/@core/infra/container-registry";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type TimerContextType = {
  timer: Timer
  getDisplayTime: () => string
  setNextState: () => void
  setTicking: (ticking: boolean) => void
}

const defaultContext: TimerContextType = {
  timer: new Timer({}),
  getDisplayTime: () => "",
  setNextState: (): void => {},
  setTicking: (ticking: boolean): void => {},
}

const TimerContext = createContext<TimerContextType>(defaultContext);

const getDisplayTimeUseCase = container.get<GetDisplayTimeUseCase>(Registry.GetDisplayTimeUseCase);
const setNextStateUseCase = container.get<SetNextStateUseCase>(Registry.SetNextStateUseCase);
const setTickingUseCase = container.get<SetTickingUseCase>(Registry.SetTickingUseCase);
const passASecondUseCase = container.get<PassASecondUseCase>(Registry.PassASecondUseCase);

const TimerProvider = ({ children }: PropsWithChildren) => {
  const [timer, setTimer] = useState<Timer>(defaultContext.timer);
  const audio =  useMemo(() => {
    if (typeof window !== 'undefined') return new Audio("/assets/audios/alarm-clock.mp3")
  }, []);
  if (audio) audio.loop = false;

  const getDisplayTime = useCallback(() => {
    return getDisplayTimeUseCase.execute(timer);
  }, [timer]);

  const setNextState = useCallback(() => {
    const newTimer = setNextStateUseCase.execute(timer);
    setTimer(newTimer);
  }, [timer]);

  const setTicking = useCallback((ticking: boolean) => {
    const newTimer = setTickingUseCase.execute(timer, ticking);
    setTimer(newTimer);
  }, [timer]);

  const passASecond = useCallback(() => {
    const newTimer = passASecondUseCase.execute(timer);
    if (newTimer.time === 0) {
      if (audio) audio.play();
      setTimer(setNextStateUseCase.execute(newTimer));
    }
    else setTimer(newTimer);
  }, [timer, audio]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer.ticking) passASecond();
    }, 1)
    return () => clearTimeout(timeout)
  }, [timer, passASecond]);

  return (
    <TimerContext.Provider
      value={{
        timer,
        getDisplayTime,
        setNextState,
        setTicking,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export type { TimerContextType }
export { TimerContext, TimerProvider }
