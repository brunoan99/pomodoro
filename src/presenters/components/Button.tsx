
export const Button = ({ message, onClick }: { message: string, onClick: React.MouseEventHandler<HTMLButtonElement> }) => (
  <div className="bg-[#D9D9D9] w-[144px] h-[72px] shadow-xl rounded-3xl flex text-xl antialiased tracking-widest text-center align-middle justify-center ">
    <button className="self-center h-full w-full" onClick={onClick}>{message}</button>
  </div>
)

