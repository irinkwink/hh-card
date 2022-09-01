import { useState } from "react";
import { createContext } from "react";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({children}) => {
  const [holiday, setHoliday] = useState('Выбрать праздник');
  
  return (
    <holidayContext.Provider value={{holiday, setHoliday}}>
      {children}
    </holidayContext.Provider>
  )
}