import { useEffect, useState } from "react";
import { Center, Header, Timer } from "../components";

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

  useEffect(() => {
    const timer = setTimeout(() => {

      if (ticking) {
        const newTime = getNewTime(time);
        if (newTime != "00:00") setTime(newTime);
        else if (state != "Focus") {
          setState("Focus");
          setTime("25:00");
          setTicking(false);
        } else if (breakCount < 3) {
          setBreakCount(breakCount + 1)
          setState("Short Break");
          setTime("05:00");
          setTicking(false);
        } else {
          setBreakCount(0);
          setState("Long Break");
          setTime("15:00");
          setTicking(false);
        }
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [time, ticking, breakCount, state])

  return (
      <div className="min-h-screen bg-[#E9E9E9] grid grid-cols-1 grid-rows-[64px_minmax(64px,_1fr)]">
          <Header/>
          <Center
            children={<Timer time={time} msg={state} />}
          />
          <button onClick={() => setTicking(false)}>pause</button>
          <button onClick={() => setTicking(true)}>resume</button>
      </div>
  );
}
