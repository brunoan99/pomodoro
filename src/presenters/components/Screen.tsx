import { ReactElement } from "react";

type ScreenStyles = {
  bgColor?: string,
}

export const Screen = (
  {
    child,
    styles,
  }: {
    child: ReactElement,
    styles?: ScreenStyles
  }) => {
  const Background = styles?.bgColor || "bg-[#FFF]";
  const Styles = ["min-h-screen", Background].join(" ")
  return (
    <div className={Styles}>
      {child}
    </div>
  )
}
