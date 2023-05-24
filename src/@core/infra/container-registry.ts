import { Container } from "inversify";
import { GetDisplayTimeUseCase, PassASecondUseCase, SetNextStateUseCase, SetTickingUseCase } from "../application/timer";
import { GetLocalThemeUseCase, SetLocalThemeUseCase } from "../application/theme";

const Registry = {
  // Theme
  GetLocalThemeUseCase: Symbol.for("GetLocalThemeUseCase"),
  SetLocalThemeUseCase: Symbol.for("SetLocalThemeUseCase"),

  // Timer
  GetDisplayTimeUseCase: Symbol.for("GetDisplayTimeUseCase"),
  SetNextStateUseCase: Symbol.for("SetNextStateUseCase"),
  SetTickingUseCase: Symbol.for("SetTickingUseCase"),
  PassASecondUseCase: Symbol.for("PassASecondUseCase"),
}

const container = new Container();

// Theme
container
  .bind(Registry.GetLocalThemeUseCase)
  .toConstantValue(new GetLocalThemeUseCase());

container
  .bind(Registry.SetLocalThemeUseCase)
  .toConstantValue(new SetLocalThemeUseCase());

// Timer
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
