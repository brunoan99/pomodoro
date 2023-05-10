import { ReactNode } from "react";

export const Center = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col justify-center items-center">
    {children}
  </div>
)
