import { Timer } from "@domain";

class PassASecondUseCase {
  execute(timer: Timer): Timer {
    const newTime = timer.time - 1;
    return new Timer({
      time: newTime,
      state: timer.state,
      message: timer.message,
      breakCount: timer.breakCount,
      ticking: timer.ticking,
    });
  }
}

export { PassASecondUseCase };
