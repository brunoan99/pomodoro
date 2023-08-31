"use client";

import {
  Button,
  ButtonRow,
  Header,
  Screen,
  Title,
  Watch,
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
    <Screen>
      <Header key={"header"} action={<SwitchThemeButton />}>
        <Title child={titleLabel} />
      </Header>
      <Watch key={"watch"} time={displayTime} message={displayMessage} />
      <ButtonRow>
        <Button key={"play-button"} onClick={playButtonOnClick}>
          <span>{playButtonLabel}</span>
        </Button>
        <Button key={"next-button"} onClick={nextButtonOnClick}>
          <span>{nextButtonLabel}</span>
        </Button>
      </ButtonRow>
    </Screen>
  );
};

export { HomePage };
