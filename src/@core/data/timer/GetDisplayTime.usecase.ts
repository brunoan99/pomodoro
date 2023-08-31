import { Timer } from "@domain";

class GetDisplayTimeUseCase {
  execute(timer: Timer): string {
    const minute = Math.floor(timer.time / 60);
    const second = Math.floor(timer.time % 60);
    const minuteString = minute.toString().padStart(2, "0");
    const secondString = second.toString().padStart(2, "0");
    return `${minuteString}:${secondString}`.split("").join(" ");
  }
}

export { GetDisplayTimeUseCase };
