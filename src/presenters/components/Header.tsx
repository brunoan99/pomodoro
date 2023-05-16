import { ReactNode } from "react";

type HeaderStyles = {
  bgColor?: string,
  width?: string,
  height?: string,
  shadow?: string,
}

export const Header = ({
    child,
    styles,
  }: {
    child?: ReactNode
    styles?: HeaderStyles,
  }) => {
  const Background = "bg-[" + (styles?.bgColor || "#FFF") + "]";
  const Width = styles?.width || "w-screen";
  const Height = styles?.height || "h-auto";
  const Shadow = styles?.shadow;
  const Child = child || <></>
  const Styles = [Background, Width, Height, Shadow, "flex"].join(" ");
  return (
  <header className={Styles}>
    {Child}
  </header>)
}
