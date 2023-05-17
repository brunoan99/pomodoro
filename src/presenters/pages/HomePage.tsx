"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Center, Column, Header, Row, Screen, Timer, Title } from '@/presenters/components'

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
};

type state = "Focus" | "Short" | "Long";
const stateList = ["Focus", "Short", "Long"] as state[];

const timeOfState = {
  "Focus": "25:00",
  "Short": "5:00",
  "Long": "15:00",
};

const messageOfState = {
  "Focus": "Focus",
  "Short": "Short Break",
  "Long": "Long Break",
};

const titleOfState = {
  "Focus": "Focus Time!",
  "Short": "Short Break!",
  "Long": "Long Break!",
};

export const HomePage = () => {

  const headerHeight = "h-[64px]";
  const buttonsHeight = "h-[200px]";
  const timerHeight = "h-[673px]";

  const [breakCount, setBreakCount] = useState(0);
  const [state, setState] = useState<state>(stateList[0]);
  const [time, setTime] = useState(timeOfState[state]);
  const [message, setMessage] = useState(messageOfState[state]);
  const [ticking, setTicking] = useState(false);

  const transition = useCallback((state: state, breakCount: number) => {
    setState(state);
    document.title = titleOfState[state];
    setMessage(messageOfState[state]);
    setTime(timeOfState[state]);
    setTicking(false);
    setBreakCount(breakCount);
  }, []);

  const nextState = useCallback((state: state, breakCount: number): state => {
    if (state === "Focus" && ((breakCount % 4) < 3)) return "Short"
    else if (state === "Focus") return "Long"
    return "Focus"
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) {
        const newTime = getNewTime(time);
        if (newTime != "00:00") {
          document.title = newTime
          setTime(newTime);
        } else {
          const newState = nextState(state, breakCount);
          const newBreakCount = newState != "Focus"
                              ? breakCount + 1
                              : breakCount;
          transition(newState, newBreakCount);
        }
      }
    }, 1e3)
    return () => clearTimeout(timer)
  }, [time, ticking, breakCount, state, nextState, transition]);

  const playButtonMessage = ticking ? "Pause" : "Resume";
  const playButtonOnClick = () => setTicking(!ticking);

  const nextButtonMessage = "Next"
  const nextButtonOnClick = () => {
    const newState = nextState(state, breakCount);
    transition(newState, breakCount);
  }

  return (
    <>
      <Screen
        styles={{ bgColor: "bg-[#E9E9E9]" }}
        child={
          <Column
            childrens={[
              <Header
                key={"header"}
                styles={{ height: headerHeight, shadow: "shadow-xl", bgColor: "#D9D9D9" }}
                child={<Title child={"My Pomodoro"} />}
              />,
              <Center
                key={"timer"}
                styles={{ height: timerHeight }}
                child={<Timer
                  time={time}
                  msg={message}
                  breaks={breakCount}/>}
              />,
              <Center
                key={"buttons"}
                styles={{ height: buttonsHeight }}
                child={
                  <Row
                    childrens={[
                      <Button
                        key={"play-button"}
                        child={<p>{playButtonMessage}</p>}
                        onClick={playButtonOnClick}/>,
                      <Button
                        key={"next-button"}
                        child={<p>{nextButtonMessage}</p>}
                        onClick={nextButtonOnClick}/>
                    ]}
                  />}
              />
            ]}
          />}
      />
    </>
  );
}
