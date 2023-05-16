import { ReactElement } from "react"

export const Row = ({ childrens }: { childrens: ReactElement[] }) => (
  <div className="flex flex-row justify-around items-center gap-x-10">
    {childrens}
  </div>
)
