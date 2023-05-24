import { Timer } from "@/@core/domain/entities/Timer";

class SetNextStateUseCase {
  execute(timer: Timer): Timer {
    console.log("teste 2")
    const state = Timer.getNextState(timer.state, timer.breakCount);
    const time = Timer.stateInfo[state].time;
    const message = Timer.stateInfo[state].message;
    const breakCount = timer.state === "Focus" ? timer.breakCount + 1 : timer.breakCount;
    const ticking = false;
    return new Timer({ state, time, message, breakCount, ticking });
  }
}

export { SetNextStateUseCase };
