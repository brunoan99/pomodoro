"use client";

import { useContext } from "react";
import { SwitchThemeButton } from "./SwitchThemeButton";
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

const ConfigModal = () => {
  const {
    focusTimeInMinutes,
    changeFocusTimeInMinutes,
    shortBreakTimeInMinutes,
    changeShortBreakTimeInMinutes,
    longBreakTimeInMinutes,
    changeLongBreakTimeInMinutes,
  } = useContext(TimerContext);

  return (
    <dialog id="configModal" data-modal className="p-0 rounded-[40px]">
      <div id="insideModal" className="flex justify-center items-center">
        <div className="bg-secondary-color min-w-[300px] w-[50vw] max-w-[700px] min-h-[200px] border-[#fff] border-[2px] rounded-[40px] flex flex-col items-center p-6 pb-8 gap-y-4">
          <h3 className="text-[24px]">Configs</h3>
          <TextInputLine
            label="Pomodoro Time"
            value={focusTimeInMinutes}
            handleChange={(value) => changeFocusTimeInMinutes(parseInt(value))}
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
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export { ConfigModal };
