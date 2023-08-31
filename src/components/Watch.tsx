const Watch = ({ time, message }: { time: string; message: string }) => {
  return (
    <div className="flex justify-center items-center h-[63vh]">
      <div className="bg-secondary-color min-w-[250px] w-[25vw] max-w-[400px] min-h-[250px] h-[25vw] max-h-[400px] rounded-full shadow-xl">
        <div className="mt-[1vh] h-full w-full flex flex-col justify-center text-center align-middle">
          <p className="antialiased select-none tracking-[4px] text-3xl text-center text-primary-font-color">
            {time}
          </p>
          <p className="pt-[1vh] antialiased select-none tracking-[4px] text-lg text-center text-primary-font-color">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Watch };
