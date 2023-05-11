import { ReactNode } from "react";

export const Center = ({ child: child }: { child: ReactNode }) => (
  <div className="flex flex-col justify-center items-center">
    {child}
  </div>
)
