'use client';

import { Button, ButtonCenter, Column, Header, Row, Screen, Watch, Title, SwitchThemeButton } from '@/components'
import { ThemeContext } from '@/context/theme.provider';
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

  const themeContext = useContext(ThemeContext);
  const switchTheme = themeContext.switchTheme;

  return <>
    <Screen
      child={<Column
        childrens={[
          <Header
            key={"header"}
            title={
              <Title
                key={"header-title"}
                child={titleLabel}
            />}
            action={
              <SwitchThemeButton
                onClick={switchTheme}
              />
            }
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
