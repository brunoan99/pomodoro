"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Watch = ({ time, message }: { time: string; message: string }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-[63vh]">
      <div className="bg-secondary-color min-w-[250px] w-[25vw] max-w-[400px] min-h-[250px] h-[25vw] max-h-[400px] rounded-full shadow-xl">
        <div className="mt-[1vh] h-full w-full flex flex-col justify-center text-center align-middle">
          {isClient ? (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                className="antialiased select-none tracking-[4px] text-3xl text-center text-primary-font-color"
                suppressHydrationWarning
              >
                {time}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                className="pt-[1vh] antialiased select-none tracking-[4px] text-lg text-center text-primary-font-color"
                suppressHydrationWarning
              >
                {message}
              </motion.p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export { Watch };
