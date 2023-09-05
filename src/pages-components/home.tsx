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
import { TimerContext } from "@contexts";
import { useContext } from "react";

const HomePage = () => {
  const timerContext = useContext(TimerContext);
  const {
    displayTime,
    displayMessage,
    ticking,
    setTicking,
    setNextState: nextButtonOnClick,

    focusTimeInMinutes,
    changeFocusTimeInMinutes,
    shortBreakTimeInMinutes,
    changeShortBreakTimeInMinutes,
    longBreakTimeInMinutes,
    changeLongBreakTimeInMinutes,
  } = timerContext;
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
      <ConfigModal
        focusTime={focusTimeInMinutes}
        handleFocusChange={(value: string) =>
          changeFocusTimeInMinutes(parseInt(value) || focusTimeInMinutes)
        }
        shortBreakTime={shortBreakTimeInMinutes}
        handleShortBreakChange={(value: string) =>
          changeShortBreakTimeInMinutes(
            parseInt(value) || shortBreakTimeInMinutes
          )
        }
        longBreakTime={longBreakTimeInMinutes}
        handleLongBreakChange={(value: string) =>
          changeLongBreakTimeInMinutes(
            parseInt(value) || longBreakTimeInMinutes
          )
        }
      />
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
