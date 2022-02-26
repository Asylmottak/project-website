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
    month: "00",
    day: "00",
    year: "00",
    hour: "00",
    second: "00",
    minute: "00",
  });

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const newDate: Date = {
        month: (date.getMonth() + 1).toString(), // In javascript month starts with 0 for some reason
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
