import { ReactElement } from "react";

export const Center = ({
    child,
    heigh
  }: {
    child: ReactElement
    heigh: string,
  }) => {
  return (
    <div className={`flex justify-center items-center h-[${heigh}]`}>
      {child}
   </div>
  )
}
