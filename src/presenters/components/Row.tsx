import { ReactNode } from "react"

export const Row = ({ childrens }: { childrens: ReactNode[] }) => (
  <div className="flex flex-row justify-around items-center">
    {childrens}
  </div>
)
