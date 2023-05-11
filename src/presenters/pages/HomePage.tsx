import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Center, Header, Timer } from "../components";

const getNewTime = (time: string): string => {
  const [minute, second] = time.split(":");
  if (parseInt(second) > 0) {
    const newSecond = parseInt(second) - 1;
    const secondString = newSecond < 10
          ? "0" + newSecond.toString()
          : newSecond;
    return minute + ":" + secondString;
  } else {
    const newMinute = parseInt(minute) - 1;
    const minuteString = newMinute < 10
          ? "0" + newMinute.toString()
          : newMinute;
    const secondString = "59";
    return minuteString + ":" + secondString;
  }
}

export const HomePage = () => {
  const [ticking, setTicking] = useState(false);
  const [time, setTime] = useState("25:00");
  const [breakCount, setBreakCount] = useState(0);
  const [state, setState] = useState("Focus");
  const audio = useMemo(() => new Audio('../../../public/assets/audio/alarm-clock.mp3'), []);
  audio.loop = false;

  const transition = useCallback((title: string, state: string, time: string, breakCount: number) => {
    document.title = title;
    setState(state);
    setTime(time);
    setTicking(false);
    setBreakCount(breakCount);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) {
        const newTime = getNewTime(time);
        if (newTime != "00:00") {
          document.title = newTime
          setTime(newTime);
        } else if (state != "Focus") {
          audio.play()
          transition("Focus Time", "Focus", "25:00", breakCount);
        } else if ((breakCount % 4) < 3) {
          audio.play()
          transition("Short Break Time", "Short Break", "05:00", breakCount + 1);
        } else {
          audio.play()
          transition("Long Break Time", "Long Break", "15:00", breakCount + 1);
        }
      }
    }, 1e3)
    return () => clearTimeout(timer)
  }, [time, ticking, breakCount, state, audio, transition])

  const buttonMessage = ticking ? "Pause" : "Resume";
  const buttonOnClick = () => setTicking(!ticking);

  return (
      <div className="min-h-screen bg-[#E9E9E9] grid grid-cols-1 grid-rows-[64px,1fr,200px]">
          <Header/>
          <Center
            child={<Timer time={time} msg={state} breaks={breakCount}/>}
          />
          <Center
            child={<Button message={buttonMessage} onClick={buttonOnClick}/>}
          />
      </div>
  );
}
