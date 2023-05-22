import { ReactElement } from "react";

export const ButtonCenter = ({
    child,
  }: {
    child: ReactElement
  }) => {
  return (
    <div className={"flex justify-center items-center h-[10vh]"}>
      {child}
   </div>
  )
}
