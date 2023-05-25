type state = "Focus" | "Short" | "Long";

type TimerProps = {
  state?: state
  time?: number
  message?: string,
  breakCount?: number,
  ticking?: boolean,
}

class Timer {
  static stateInfo = {
    "Focus": { "time": 1500, "message": "Focus Time!"  },
    "Short": { "time":  300, "message": "Short Break!" },
    "Long":  { "time":  900, "message": "Long Break!"  },
  };
  static getNextState(actualState: state, breakCount: number): state {
    if (actualState === "Focus" && ((breakCount % 4) < 3)) return "Short"
    else if (actualState === "Focus") return "Long"
    return "Focus"
  }
  public actualState: state;
  public timeInSeconds: number;
  public message: string;
  public breakCount: number;
  public ticking: boolean;

  constructor({ state, time, message, breakCount, ticking }: TimerProps) {
    this.actualState = state || "Focus";
    this.timeInSeconds = time === undefined ? Timer.stateInfo[this.state].time : time;
    this.message = message || Timer.stateInfo[this.state].message;
    this.breakCount = breakCount || 0;
    this.ticking = ticking || false;
  }

  get state(): state { return this.actualState };

  get time(): number { return this.timeInSeconds };
}

export type { state };
export { Timer };
