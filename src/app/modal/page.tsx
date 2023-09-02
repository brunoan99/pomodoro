"use client";

import { ConfigModal, Screen } from "@components";
import { TimerContext } from "@contexts";
import { useContext } from "react";

export default function Page() {
  const timerContext = useContext(TimerContext);
  const {
    pomodoroTime,
    setPomodoroTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = timerContext;

  return (
    <Screen>
      <button id="open-modal-button">Open</button>
      <ConfigModal
        pomodoroTime={pomodoroTime}
        handlePomodoroChange={(value: string) =>
          setPomodoroTime(parseInt(value))
        }
        shortBreakTime={shortBreakTime}
        handleShortBreakChange={(value: string) =>
          setShortBreakTime(parseInt(value))
        }
        longBreakTime={longBreakTime}
        handleLongBreakChange={(value: string) =>
          setLongBreakTime(parseInt(value))
        }
      />
    </Screen>
  );
}
