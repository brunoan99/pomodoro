"use client";

import {
  Button,
  ButtonCenter,
  Column,
  Header,
  Row,
  Screen,
  Watch,
  Title,
  SwitchThemeButton,
} from "@/components";
import { TimerContext } from "@contexts";
import { useContext } from "react";

const HomePage = () => {
  const timerContext = useContext(TimerContext);
  const {
    displayTime,
    displayMessage,
    ticking,
    setNextState: nextButtonOnClick,
  } = timerContext;
  const playButtonOnClick = () => timerContext.setTicking(!ticking);

  const titleLabel = "My Pomodoro";
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next";

  return (
    <Screen
      child={
        <Column
          childrens={[
            <Header
              key={"header"}
              title={<Title child={titleLabel} />}
              action={<SwitchThemeButton />}
            />,
            <Watch key={"watch"} time={displayTime} message={displayMessage} />,
            <ButtonCenter
              key={"buttons"}
              child={
                <Row
                  childrens={[
                    <Button
                      key={"play-button"}
                      child={<p>{playButtonLabel}</p>}
                      onClick={playButtonOnClick}
                    />,
                    <Button
                      key={"next-button"}
                      child={<p>{nextButtonLabel}</p>}
                      onClick={nextButtonOnClick}
                    />,
                  ]}
                />
              }
            />,
          ]}
        />
      }
    />
  );
};

export { HomePage };
