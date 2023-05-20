import { ReactElement } from "react"

export const Button = ({ child, onClick }: {
    child: ReactElement,
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }) => (
  <div className="bg-secondary-color min-w-[120px] w-[12vw] min-h-[65px] shadow-lg rounded-3xl flex text-xl antialiased tracking-widest text-center align-middle justify-center hover:shadow-xl">
    <button className="self-center h-full w-full text-primary-font-color" onClick={onClick}>
      {child}
    </button>
  </div>
)
