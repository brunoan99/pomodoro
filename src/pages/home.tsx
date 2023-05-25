"use client";

import { Button, ButtonCenter, Column, Header, Row, Screen, Watch, Title, SwitchThemeButton } from '@/components'
import { ThemeContext, TimerContext } from '@/context';
import { useContext } from 'react';

export default function HomePage() {
  const timerContext = useContext(TimerContext);
  const { ticking, message } = timerContext.timer;
  const time = timerContext.getDisplayTime();
  const playButtonOnClick = () => timerContext.setTicking(!ticking);
  const nextButtonOnClick = timerContext.setNextState;

  const titleLabel = "My Pomodoro";
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next";

  // const themeProvider = useContext(ThemeContext);
  // const switchTheme = themeProvider.switchTheme;

  return (
  <>
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
  </>);
}
