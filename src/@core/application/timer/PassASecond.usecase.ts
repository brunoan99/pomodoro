import { Timer } from "@/@core/domain/entities/Timer";
import { SetNextStateUseCase } from "./SetNextState.usecase";


class PassASecondUseCase {
  constructor(private setNext: SetNextStateUseCase) {}

  execute(timer: Timer): Timer {
    if (timer.time >= 1) {
      const newTime = timer.time - 1;
      return new Timer({
        time: newTime,
        state: timer.state,
        message: timer.message,
        breakCount: timer.breakCount,
        ticking: timer.ticking,
       });
    } else {
      return this.setNext.execute(timer);
    }
  }
}

export { PassASecondUseCase };
