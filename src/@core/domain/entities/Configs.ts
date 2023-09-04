import { Timer } from "./Timer";

type State = "Focus" | "Short" | "Long";

type StateConfig = {
  Focus: { time: number; message: string };
  Short: { time: number; message: string };
  Long: { time: number; message: string };
};

type TimerConfigsProps = {
  config: StateConfig;
};

class TimerConfigs {
  private currentState: State;
  private count: number;
  public config: StateConfig;

  constructor({ config }: TimerConfigsProps) {
    this.currentState = "Focus";
    this.count = 0;
    this.config = config;
  }

  private get nextState(): State {
    if (this.currentState === "Focus" && this.count % 4 < 3) return "Short";
    else if (this.currentState === "Focus") return "Long";
    else return "Focus";
  }

  genNextTimer(): Timer {
    const state = this.nextState;
    this.currentState = state;
    const time = this.config[state].time;
    const message = this.config[state].message;
    this.count = state === "Focus" ? this.count + 1 : this.count;
    return new Timer({ time, message });
  }

  get focusTimeInSeconds(): number {
    return this.config["Focus"].time;
  }

  changeFocusTimeInSeconds(time: number) {
    this.config["Focus"].time = time;
  }

  get shortTimeInSeconds(): number {
    return this.config["Short"].time;
  }

  changeShortTimeInSeconds(time: number) {
    this.config["Short"].time = time;
  }

  get longTimeInSeconds(): number {
    return this.config["Long"].time;
  }

  changeLongTimeInSeconds(time: number) {
    this.config["Long"].time = time;
  }
}

export type { State };
export { TimerConfigs };
