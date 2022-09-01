import { useState } from "react";
import { createContext } from "react";
import { useHolidays } from "../hooks/useHolidays";

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({children}) => {
  const [holiday, setHoliday] = useState('');
  const [holidays] = useHolidays();

  const changeHoliday = title => {
    setHoliday(title);
  }
  
  return (
    <holidaysContext.Provider value={{holidays, holiday, changeHoliday}}>
      {children}
    </holidaysContext.Provider>
  )
}