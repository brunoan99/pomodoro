type TimerProps = {
  time: number;
  message: string;
  ticking?: boolean;
};

class Timer {
  public time: number;
  public message: string;
  public ticking: boolean;

  constructor({ time, message, ticking }: TimerProps) {
    this.time = time;
    this.message = message;
    this.ticking = ticking !== undefined ? ticking : false;
  }

  get timeInSeconds(): number {
    return this.time;
  }

  get displayTime(): string {
    const minute = Math.floor(this.time / 60);
    const second = this.time % 60;
    const minuteString = minute.toString().padStart(2, "0");
    const secondString = second.toString().padStart(2, "0");
    return `${minuteString}:${secondString}`.split("").join(" ");
  }
}

export { Timer };
