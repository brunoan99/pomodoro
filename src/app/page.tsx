'use client';

import { HomePage } from '@/presenters/pages/HomePage'
import { useState, useRef } from 'react';

const useTimer = () => {
  type stateType = "Focus" | "Short" | "Long";
  const stateInfo = {
    "Focus": { "time": "25:00", "message": "Focus Time!" },
    "Short": { "time": "05:00", "message": "Short Break!" },
    "Long":  { "time": "15:00", "message": "Long Break!" },
  };

  const [state, setState] = useState<stateType>("Focus");
  const [time, setTime] = useState(stateInfo[state]["time"]);
  const [message, setMessage] = useState(stateInfo[state]["message"]);
  const [ticking, setTicking] = useState(false);
  const [breakCount, setBreakCount] = useState(0);
  const audio = typeof Audio !== "undefined" && new Audio("/assets/audios/alarm-clock.mp3");
  if (audio) audio.loop = false;

  const passASecond = () => {
    const [minute, second] = time.split(":");
    let newTime: string;
    if (parseInt(second) > 0) {
      const newSecond = parseInt(second) - 1;
      const secondString = newSecond < 10
            ? "0" + newSecond.toString()
            : newSecond;
      newTime = minute + ":" + secondString;
    } else {
      const newMinute = parseInt(minute) - 1;
      const minuteString = newMinute < 10
            ? "0" + newMinute.toString()
            : newMinute;
      const secondString = "59";
      newTime = minuteString + ":" + secondString;
    }
    newTime == "00:00"
      ? setNextState()
      : setTimeAndTitle(newTime)
  }

  const setTimeAndTitle = (newTime: string) => {
    setTime(newTime);
    setTitle(state + " - " + newTime);
  }

  const getNextState = (state: stateType, breakCount: number): stateType => {
    if (state === "Focus" && ((breakCount % 4) < 3)) return "Short"
    else if (state === "Focus") return "Long"
    return "Focus"
  }

  const setTitle = (title: string) => document.title = title;

  const setNextState = (playAudio = true) => {
    const nextState = getNextState(state, breakCount);
    const nextBreakCount = breakCount + (nextState != "Focus" ? 1 : 0)

    setState(nextState)
    setTitle(stateInfo[nextState]["message"]);
    setMessage(stateInfo[nextState]["message"]);
    setTime(stateInfo[nextState]["time"]);
    setBreakCount(nextBreakCount);
    setTicking(false);
    if (playAudio && audio) audio.play();
  }

  return {
    state,
    time,
    message,
    ticking,
    setTicking,
    passASecond,
    setNextState
  };
}

export default function Home() {
  const {
    time,
    ticking,
    message,
    passASecond,
    setTicking,
    setNextState,
  } = useTimer()

  const playButtonOnClick = () => setTicking(!ticking);
  const nextButtonOnClick = () => setNextState(false);

  return (
    <HomePage
      time={time}
      ticking={ticking}
      message={message}
      passASecond={passASecond}
      playButtonOnClick={playButtonOnClick}
      nextButtonOnClick={nextButtonOnClick}
    />
  )
}
