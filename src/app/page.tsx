'use client';

import { Button, ButtonCenter, Column, Header, Row, Screen, Watch, Title } from '@/components'
import { TimerContext } from "@/context/timer.provider";
import { useContext } from 'react';

export default function HomePage() {
  const timerContext = useContext(TimerContext);
  const timer = timerContext.timer;
  const ticking = timer.ticking;
  const message = timer.message;
  const time = timerContext.getDisplayTime().split('').join(' ');
  const playButtonOnClick = () => timerContext.setTicking(!ticking);
  const nextButtonOnClick = () => timerContext.setNextState();

  const titleLabel = "My Pomodoro"
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next"


  return <>
    <Screen
      child={<Column
        childrens={[
          <Header
            key={"header"}
            child={
              <Title
                child={titleLabel}
            />}
          />,
          <Watch
            key={"watch"}
            time={time}
            message={message}
          />,
          <ButtonCenter
            key={"buttons"}
            child={<Row
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
