"use client";

import { PropsWithChildren, useContext } from "react";
import { SwitchThemeButton } from "./SwitchThemeButton";
import { motion, AnimatePresence } from "framer-motion";
import { TimerContext } from "@contexts";

const TextInputLine = ({
  label,
  value,
  handleChange,
}: {
  label: string;
  value: number;
  handleChange: (value: string) => void;
}) => (
  <div className="flex flex-row w-[80%] justify-between">
    <span>{label}</span>
    <input
      className="p-1 bg-slate-50 text-[#000] w-[20%] text-center rounded-lg"
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  </div>
);

const ScreenBackground = ({
  children,
  isShowing,
  clickOnBackground,
}: {
  isShowing: boolean;
  clickOnBackground: () => void;
} & PropsWithChildren) => {
  return isShowing ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      id="background"
      className="flex flex-row justify-center items-center absolute w-full h-full bg-[#00000075] z-10"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === "background") clickOnBackground();
      }}
    >
      {children}
    </motion.div>
  ) : (
    <></>
  );
};

const ConfigModal = ({
  isOpen,
  closeButtonPress,
}: {
  isOpen: boolean;
  closeButtonPress: () => void;
}) => {
  const {
    focusTimeInMinutes,
    changeFocusTimeInMinutes,
    shortBreakTimeInMinutes,
    changeShortBreakTimeInMinutes,
    longBreakTimeInMinutes,
    changeLongBreakTimeInMinutes,
  } = useContext(TimerContext);

  return (
    <AnimatePresence initial={false}>
      <ScreenBackground isShowing={isOpen} clickOnBackground={closeButtonPress}>
        <dialog
          id="configModal"
          open={isOpen}
          data-modal
          className="p-0 rounded-[40px]"
        >
          <div id="insideModal" className="flex justify-center items-center">
            <div className="bg-secondary-color min-w-[280px] w-[50vw] max-w-[600px] min-h-[200px] border-[#fff] border-[2px] rounded-[40px] flex flex-col items-center p-6 pb-8 gap-y-4">
              <h3 className="text-[24px]">Configs</h3>
              <TextInputLine
                label="Pomodoro Time"
                value={focusTimeInMinutes}
                handleChange={(value) =>
                  changeFocusTimeInMinutes(parseInt(value))
                }
              />
              <TextInputLine
                label="Short Break Time"
                value={shortBreakTimeInMinutes}
                handleChange={(value) =>
                  changeShortBreakTimeInMinutes(parseInt(value))
                }
              />
              <TextInputLine
                label="Long Break Time"
                value={longBreakTimeInMinutes}
                handleChange={(value) =>
                  changeLongBreakTimeInMinutes(parseInt(value))
                }
              />
              <div className="w-[80%] flex flex-row justify-end">
                <SwitchThemeButton />
              </div>
              <div className="w-[80%] flex flex-row justify-end">
                <button
                  id="close-modal-button"
                  className="bg-[#fff] p-1.5 rounded-xl text-[#000]"
                  onClick={(e) => closeButtonPress()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </ScreenBackground>
    </AnimatePresence>
  );
};

export { ConfigModal };
