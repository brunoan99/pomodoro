"use client";

import { Timer } from "@domain";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type TimerContextType = {
  displayTime: string;
  displayMessage: string;
  ticking: boolean;
  setTicking: (ticking: boolean) => void;
  setNextState: () => void;
};

const defaultContext: TimerContextType = {
  displayTime: "",
  displayMessage: "",
  ticking: false,
  setNextState: (): void => {},
  setTicking: (ticking: boolean): void => {},
};

const TimerContext = createContext<TimerContextType>(defaultContext);

const TimerProvider = ({ children }: PropsWithChildren) => {
  const [timer, setTimer] = useState<Timer>(new Timer({}));
  const audio = useMemo(() => {
    if (typeof window !== "undefined")
      return new Audio("/assets/audios/alarm-clock.mp3");
  }, []);
  if (audio) audio.loop = false;

  const setNextState = useCallback(() => {
    const state = timer.nextState;
    const breakCount =
      timer.state === "Focus" ? timer.breakCount + 1 : timer.breakCount;
    const newTimer = new Timer({ state, breakCount });
    setTimer(newTimer);
  }, [timer]);

  const setTicking = useCallback(
    (ticking: boolean) => {
      const newTimer = new Timer({
        time: timer.time,
        state: timer.state,
        message: timer.message,
        breakCount: timer.breakCount,
        ticking: ticking,
      });
      setTimer(newTimer);
    },
    [timer]
  );

  const passASecond = useCallback(() => {
    const newTime = timer.time - 1;
    const newTimer = new Timer({
      time: newTime,
      state: timer.state,
      message: timer.message,
      breakCount: timer.breakCount,
      ticking: timer.ticking,
    });
    if (newTimer.time === 0) {
      audio?.play();
      setNextState();
    } else setTimer(newTimer);
  }, [timer, audio, setNextState]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer.ticking) passASecond();
    }, 1e3);
    return () => clearTimeout(timeout);
  }, [timer, passASecond]);

  return (
    <TimerContext.Provider
      value={{
        displayTime: timer.displayTime,
        displayMessage: timer.message,
        ticking: timer.ticking,
        setNextState,
        setTicking,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export type { TimerContextType };
export { TimerContext, TimerProvider };
