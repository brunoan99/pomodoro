import { Timer } from "@/@core/domain/entities/Timer";

class SetTickingUseCase {
  execute(timer: Timer, ticking: boolean): Timer {
    return new Timer({
      time: timer.time,
      state: timer.state,
      message: timer.message,
      breakCount: timer.breakCount,
      ticking: ticking,
     });
  }
}

export { SetTickingUseCase };
