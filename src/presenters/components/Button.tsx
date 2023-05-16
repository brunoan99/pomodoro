import { ReactElement } from "react"

export const Button = ({
    child,
    onClick,
  }: {
    child: ReactElement,
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }) => (
  <div className="bg-[#D9D9D9] w-[144px] h-[72px] shadow-lg rounded-3xl flex text-xl antialiased tracking-widest text-center align-middle justify-center hover:shadow-xl">
    <button className="self-center h-full w-full" onClick={onClick}>
      {child}
    </button>
  </div>
)

