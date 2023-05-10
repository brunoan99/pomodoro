export const Timer = ({ time, msg }: { time: string, msg: string}) => (
    <div className="bg-[#D9D9D9] h-96 w-96 rounded-full flex flex-col text-center align-middle justify-center shadow-xl">
      <p>{time}</p>
      <p>{msg}</p>
    </div>
)
