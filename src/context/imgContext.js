import { useContext } from "react";
import { createContext } from "react";
import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext)
  const [img] = useImg(holiday);
  
  return (
    <imgContext.Provider value={{img}}>
      {children}
    </imgContext.Provider>
  )
}