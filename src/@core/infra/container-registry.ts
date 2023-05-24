import { Container } from "inversify";
import { PassASecondUseCase } from "../application/timer/PassASecond.usecase";
import { SetNextStateUseCase } from "../application/timer/SetNextState.usecase";
import { SetTickingUseCase } from "../application/timer/SetTicking.usecase";
import { GetDisplayTimeUseCase } from "../application/timer/GetDisplayTime";

const Registry = {
  GetDisplayTimeUseCase: Symbol.for("GetDisplayTimeUseCase"),
  SetNextStateUseCase: Symbol.for("SetNextStateUseCase"),
  SetTickingUseCase: Symbol.for("SetTickingUseCase"),
  PassASecondUseCase: Symbol.for("PassASecondUseCase"),
}

const container = new Container();

container
  .bind(Registry.GetDisplayTimeUseCase)
  .toConstantValue(new GetDisplayTimeUseCase());

container
  .bind(Registry.SetNextStateUseCase)
  .toConstantValue(new SetNextStateUseCase());

container
  .bind(Registry.SetTickingUseCase)
  .toConstantValue(new SetTickingUseCase());

container
  .bind(Registry.PassASecondUseCase)
  .toConstantValue(new PassASecondUseCase());

export {
  Registry,
  container
}
