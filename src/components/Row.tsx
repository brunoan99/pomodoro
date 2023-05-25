import { ReactElement } from "react"

export const Row = ({ childrens }: { childrens: ReactElement[] }) => (
  <div className="flex flex-row justify-start gap-x-[50px]">
    {childrens}
  </div>
)
