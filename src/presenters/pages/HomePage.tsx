"use client";

import { useEffect } from "react";
import { Button, ButtonCenter, Column, Header, Row, Screen, Center, Timer, Title } from '@/presenters/components'

type HomePageProps = {
  time: string
  message: string
  ticking: boolean
  passASecond: () => void
  playButtonOnClick: () => void
  nextButtonOnClick: () => void
}

export const HomePage = ({
  time,
  message,
  ticking,
  passASecond,
  playButtonOnClick,
  nextButtonOnClick,
}: HomePageProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) passASecond();
    }, 1e3)
    return () => clearTimeout(timer)
  }, [ticking, passASecond]);

  const titleLabel = "My Pomodoro"
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next"

  return <>
    <Screen
      child={
        <Column
          childrens={[
            <Header
              key={"header"}
              child={
                <Title
                  child={titleLabel}
              />}
            />,
            <Timer
              key={"timer"}
              time={time}
              msg={message}
            />,
            <ButtonCenter
              key={"buttons"}
              child={
                <Row
                  childrens={[
                    <Button
                      key={"play-button"}
                      child={<p>{playButtonLabel}</p>}
                      onClick={playButtonOnClick}/>,
                    <Button
                      key={"next-button"}
                      child={<p>{nextButtonLabel}</p>}
                      onClick={nextButtonOnClick}/>
                  ]}
                />}
            />
          ]}
        />}
      />
    </>;
}
