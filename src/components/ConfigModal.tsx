"use client";

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
      className="bg-slate-50 text-[#000] w-[20%] text-center rounded-lg"
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  </div>
);

const ConfigModal = ({
  pomodoroTime,
  handlePomodoroChange,
  shortBreakTime,
  handleShortBreakChange,
  longBreakTime,
  handleLongBreakChange,
}: {
  pomodoroTime: number;
  handlePomodoroChange: (value: string) => void;
  shortBreakTime: number;
  handleShortBreakChange: (value: string) => void;
  longBreakTime: number;
  handleLongBreakChange: (value: string) => void;
}) => {
  return (
    <dialog id="configModal" data-modal className="p-0 rounded-[40px]">
      <div id="insideModal" className="flex justify-center items-center">
        <div className="bg-secondary-color min-w-[300px] w-[50vw] max-w-[700px] min-h-[200px] border-[#fff] border-[2px] rounded-[40px] flex flex-col items-center p-6 pb-8 gap-y-4">
          <h3 className="text-[24px]">Configs</h3>
          <TextInputLine
            label="Pomodoro Time"
            value={pomodoroTime}
            handleChange={(value) => handlePomodoroChange(value)}
          />
          <TextInputLine
            label="Short Break Time"
            value={shortBreakTime}
            handleChange={(value) => handleShortBreakChange(value)}
          />
          <TextInputLine
            label="Long Break Time"
            value={longBreakTime}
            handleChange={(value) => handleLongBreakChange(value)}
          />
          <div className="w-[80%] flex flex-row justify-end">
            <button
              id="close-modal-button"
              className="bg-[#fff] p-1.5 rounded-xl text-secondary-color"
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
