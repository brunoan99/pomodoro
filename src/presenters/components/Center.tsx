import { ReactElement } from "react";

type CenterStyles = {
  height?: string;
}

export const Center = ({
    child,
    styles,
  }: {
    child: ReactElement
    styles?: CenterStyles
  }) => {
  const Height = styles?.height || "h-auto"
  const Styles = [Height, "flex", "justify-center", "items-center"].join(" ")
  return (
    <div className={Styles}>
      {child}
   </div>
  )
}
