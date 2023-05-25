import { ReactElement } from "react";

export const Header = ({
    title,
    action,
  }: {
    title: ReactElement
    action: ReactElement
  }) => {
  return (
  <header className="bg-secondary-color w-screen min-h-[64px] h-[7vh] flex shadow-xl">
    <div className="flex flex-row w-full justify-between pl-[40px] pr-[40px]">
      {title}
      {action}
    </div>

  </header>)
}
