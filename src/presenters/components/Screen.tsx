import { ReactElement } from "react";

export const Screen = (
  {
    child,
  }: {
    child: ReactElement,
  }) => {
  return (
    <div className={"min-h-screen bg-primary-color"}>
      {child}
    </div>
  )
}
