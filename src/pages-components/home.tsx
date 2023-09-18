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
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const {
    displayTime,
    displayMessage,
    ticking,
    setTicking,
    setNextState: nextButtonOnClick,
  } = useContext(TimerContext);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const playButtonOnClick = () => setTicking(!ticking);

  const titleLabel = "My Pomodoro";
  const playButtonLabel = ticking ? "Pause" : "Resume";
  const nextButtonLabel = "Next";

  const openModalButton = (
    <button
      id="open-modal-button"
      className="h-2/3 p-2 self-center border rounded-2xl border-slate-500"
      onClick={(e) => setModalOpen(true)}
    >
      Settings
    </button>
  );

  return (
    <Screen>
      <ConfigModal
        isOpen={modalOpen}
        closeButtonPress={() => setModalOpen(false)}
      />
      <Header key={"header"} action={openModalButton}>
        <Title child={titleLabel} />
      </Header>
      <AnimatePresence>
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          <Watch key={"watch"} time={displayTime} message={displayMessage} />
          <ButtonRow>
            <Button key={"play-button"} onClick={playButtonOnClick}>
              <span>{playButtonLabel}</span>
            </Button>
            <Button key={"next-button"} onClick={nextButtonOnClick}>
              <span>{nextButtonLabel}</span>
            </Button>
          </ButtonRow>
        </motion.div>
      </AnimatePresence>
    </Screen>
  );
};

export { HomePage };
