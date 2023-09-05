"use client";

import {
  Button,
  ButtonRow,
  Header,
  Screen,
  Title,
  Watch,
  ConfigModal,
} from "@/components";
import { TimerContext, TimerProvider } from "@contexts";
import { useContext } from "react";

const HomePage = () => {
  const {
    displayTime,
    displayMessage,
    ticking,
    setTicking,
    setNextState: nextButtonOnClick,
  } = useContext(TimerContext);
  const playButtonOnClick = () => setTicking(!ticking);

  const titleLabel = "My Pomodoro";
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next";

  const openModalButton = (
    <button
      id="open-modal-button"
      className="h-2/3 p-2 self-center border rounded-2xl border-slate-500"
    >
      Settings
    </button>
  );

  return (
    <Screen>
      <ConfigModal />
      <Header key={"header"} action={openModalButton}>
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
