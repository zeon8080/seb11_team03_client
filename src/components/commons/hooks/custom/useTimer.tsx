import { useEffect, useState } from "react";

export const useTimer = (): any => {
  const [time, setTime] = useState(10);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let timer: any;

    if (isStarted) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time <= 0) {
      clearInterval(timer);
      setIsStarted(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStarted, time]);

  return { time, setTime, setIsStarted };
};
