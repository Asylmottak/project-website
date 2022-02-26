import { useState, useEffect } from "react";

// Interface for returned object
interface Date {
  month: string;
  day: string;
  year: string;
  hour: string;
  second: string;
  minute: string;
}

// Returns current time
const useTime = () => {
  const [date, setDate] = useState<Date>({
    month: "02",
    day: "15",
    year: "1998",
    hour: "13",
    second: "37",
    minute: "00",
  });

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const newDate: Date = {
        month: date.getMonth().toString(),
        day: date.getDate().toString(),
        year: date.getFullYear().toString(),
        hour: date.getHours().toString(),
        minute: date.getMinutes().toString(),
        second: date.getSeconds().toString(),
      };

      Object.keys(newDate).map((key) => {
        if (parseInt(newDate[key as keyof Date]) < 10) {
          newDate[key as keyof Date] = "0" + newDate[key as keyof Date];
        }
      });
      setDate(newDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return date;
};

export default useTime;
