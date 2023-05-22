import { ReactElement } from "react"

export const Column = ({ childrens }: { childrens: ReactElement[] }) => (
  <div className="flex flex-col">
    {childrens}
  </div>
)
