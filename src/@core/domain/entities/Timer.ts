type state = "Focus" | "Short" | "Long";

type TimerProps = {
  state?: state;
  time?: number;
  message?: string;
  breakCount?: number;
  ticking?: boolean;
  stateInfo?: StateInfo;
};

type StateInfo = {
  Focus: { time: number; message: string };
  Short: { time: number; message: string };
  Long: { time: number; message: string };
};

class Timer {
  public stateInfo: StateInfo = {
    Focus: { time: 1500, message: "Focus Time!" },
    Short: { time: 300, message: "Short Break!" },
    Long: { time: 900, message: "Long Break!" },
  };
  public actualState: state = "Focus";
  public timeInSeconds: number;
  public message: string;
  public breakCount: number = 0;
  public ticking: boolean = false;

  constructor({
    state,
    time,
    message,
    breakCount,
    ticking,
    stateInfo,
  }: TimerProps) {
    if (stateInfo) this.stateInfo = stateInfo;
    if (state) this.actualState = state;
    if (time) this.timeInSeconds = time;
    else this.timeInSeconds = this.stateInfo[this.actualState].time;
    if (message) this.message = message;
    else this.message = this.stateInfo[this.actualState].message;
    if (breakCount) breakCount = breakCount;
    if (ticking) this.ticking = ticking;
  }

  get state(): state {
    return this.actualState;
  }

  get time(): number {
    return this.timeInSeconds;
  }

  get nextState(): state {
    if (this.actualState === "Focus" && this.breakCount % 4 < 3) return "Short";
    else if (this.actualState === "Focus") return "Long";
    else return "Focus";
  }

  get displayTime(): string {
    const minute = Math.floor(this.time / 60);
    const second = this.time % 60;
    const minuteString = minute.toString().padStart(2, "0");
    const secondString = second.toString().padStart(2, "0");
    return `${minuteString}:${secondString}`.split("").join(" ");
  }
}

export type { state };
export { Timer };
