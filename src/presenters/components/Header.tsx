import { ReactNode } from "react";

type HeaderStyles = {
  height?: string,
}

export const Header = ({
    child,
  }: {
    child?: ReactNode
  }) => {
  const Child = child
  return (
  <header className="bg-secondary-color w-screen h-[7vh] flex shadow-xl">
    {Child}
  </header>)
}
