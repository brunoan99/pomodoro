export const Timer = ({ time, msg, breaks }: { time: string, msg: string, breaks: number}) => (
  <div className="bg-[#D9D9D9] h-80 w-80 rounded-full shadow-xl">
    <div className="h-full w-full flex flex-col text-center align-middle justify-center">
      <p className="pb-[10px] antialiased tracking-widest text-2xl">
        {time}
      </p>
      <p className="pb-[10px] pt-[10px] antialiased text-xl">
        {msg}
      </p>
      <p className="pt-[10px] antialiased text-xl">
        Streak: {breaks}
      </p>
    </div>
  </div>
)
