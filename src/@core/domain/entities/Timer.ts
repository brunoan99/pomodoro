type state = "Focus" | "Short" | "Long";

type TimerProps = {
  state?: state;
  time?: number;
  message?: string;
  breakCount?: number;
  ticking?: boolean;
};

class Timer {
  static stateInfo = {
    Focus: { time: 1500, message: "Focus Time!" },
    Short: { time: 300, message: "Short Break!" },
    Long: { time: 900, message: "Long Break!" },
  };
  public actualState: state;
  public timeInSeconds: number;
  public message: string;
  public breakCount: number;
  public ticking: boolean;

  constructor({ state, time, message, breakCount, ticking }: TimerProps) {
    this.actualState = state || "Focus";
    this.timeInSeconds =
      time === undefined ? Timer.stateInfo[this.actualState].time : time;
    this.message = message || Timer.stateInfo[this.actualState].message;
    this.breakCount = breakCount || 0;
    this.ticking = ticking || false;
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
