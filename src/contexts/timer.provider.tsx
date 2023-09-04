"use client";

import { TimerConfigs } from "@core/domain/entities/Configs";
import { Timer } from "@domain";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TimerContextType = {
  displayTime: string;
  displayMessage: string;
  ticking: boolean;
  setTicking: (ticking: boolean) => void;
  setNextState: () => void;

  focusTimeInMinutes: number;
  changeFocusTimeInMinutes: (time: number) => void;
  shortBreakTimeInMinutes: number;
  changeShortBreakTimeInMinutes: (time: number) => void;
  longBreakTimeInMinutes: number;
  changeLongBreakTimeInMinutes: (time: number) => void;
};

const MINUTES_IN_SECONDS = 60;
const DEFAULT_FOCUS_IN_SECONDS = 1500;
const DEFAULT_SHORT_IN_SECONDS = 300;
const DEFAULT_LONG_IN_SECONDS = 900;

const defaultContext: TimerContextType = {
  displayTime: "",
  displayMessage: "",
  ticking: false,
  setNextState: (): void => {},
  setTicking: (ticking: boolean): void => {},

  focusTimeInMinutes: 0,
  changeFocusTimeInMinutes: (time: number) => {},
  shortBreakTimeInMinutes: 0,
  changeShortBreakTimeInMinutes: (time: number) => {},
  longBreakTimeInMinutes: 0,
  changeLongBreakTimeInMinutes: (time: number) => {},
};

const TimerContext = createContext<TimerContextType>(defaultContext);

const TimerProvider = ({ children }: PropsWithChildren) => {
  const [focusTime, setFocusTime] = useState<number>(
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("FocusTime") || "") ||
          DEFAULT_FOCUS_IN_SECONDS
      : DEFAULT_FOCUS_IN_SECONDS
  );
  const [shortTime, setShortTime] = useState<number>(
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("ShortBreakTime") || "") ||
          DEFAULT_SHORT_IN_SECONDS
      : DEFAULT_SHORT_IN_SECONDS
  );
  const [longTime, setLongTime] = useState<number>(
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("LongBreakTime") || "") ||
          DEFAULT_LONG_IN_SECONDS
      : DEFAULT_LONG_IN_SECONDS
  );

  const config = {
    Focus: { time: focusTime, message: "Focus Time!" },
    Short: { time: shortTime, message: "Short Break" },
    Long: { time: longTime, message: "Long Break" },
  };
  const timerConfig = useRef<TimerConfigs>(new TimerConfigs({ config }));

  const [timer, setTimer] = useState<Timer>(
    new Timer({ time: focusTime, message: "Focus Time!" })
  );
  const audio = useMemo(() => {
    if (typeof window !== "undefined")
      return new Audio("/assets/audios/alarm-clock.mp3");
  }, []);
  if (audio) audio.loop = false;

  const setTicking = (ticking: boolean) => {
    const newTimer = new Timer({
      time: timer.time,
      message: timer.message,
      ticking: ticking,
    });
    setTimer(newTimer);
  };

  const setNextState = useCallback(() => {
    setTimer(timerConfig.current.genNextTimer());
  }, [timerConfig]);

  const passASecond = useCallback(() => {
    const newTimer = new Timer({
      time: timer.time - 1,
      message: timer.message,
      ticking: timer.ticking,
    });
    setTimer(newTimer);
    if (newTimer.time === 0) {
      audio?.play();
      setNextState();
    }
  }, [timer, audio, setNextState]);

  const focusTimeInMinutes = Math.floor(focusTime / MINUTES_IN_SECONDS);
  const changeFocusTimeInMinutes = (timeInMinutes: number) => {
    if (
      timeInMinutes !== null &&
      timeInMinutes !== undefined &&
      timeInMinutes > 0
    ) {
      const timeInSeconds = timeInMinutes * MINUTES_IN_SECONDS;
      timerConfig.current.config["Focus"].time = timeInSeconds;
      setFocusTime(timeInSeconds);
    }
  };

  const shortBreakTimeInMinutes = Math.floor(shortTime / MINUTES_IN_SECONDS);
  const changeShortBreakTimeInMinutes = (timeInMinutes: number) => {
    if (
      timeInMinutes !== null &&
      timeInMinutes !== undefined &&
      timeInMinutes > 0
    ) {
      const timeInSeconds = timeInMinutes * MINUTES_IN_SECONDS;
      timerConfig.current.config["Short"].time = timeInSeconds;
      setShortTime(timeInSeconds);
    }
  };

  const longBreakTimeInMinutes = Math.floor(longTime / MINUTES_IN_SECONDS);
  const changeLongBreakTimeInMinutes = (timeInMinutes: number) => {
    if (
      timeInMinutes !== null &&
      timeInMinutes !== undefined &&
      timeInMinutes > 0
    ) {
      const timeInSeconds = timeInMinutes * MINUTES_IN_SECONDS;
      timerConfig.current.config["Long"].time = timeInSeconds;
      setLongTime(timeInSeconds);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("FocusTime", focusTime.toString());
  }, [focusTime]);

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("ShortBreakTime", shortTime.toString());
  }, [shortTime]);

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("LongBreakTime", longTime.toString());
  }, [longTime]);

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

        focusTimeInMinutes,
        changeFocusTimeInMinutes,
        shortBreakTimeInMinutes,
        changeShortBreakTimeInMinutes,
        longBreakTimeInMinutes,
        changeLongBreakTimeInMinutes,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export type { TimerContextType };
export { TimerContext, TimerProvider };
