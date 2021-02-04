import React, {createContext} from 'react'
import {useSelector} from "react-redux";

export const ColorContext = createContext({})
export const Color = (props) => {
  const color = useSelector(state=>state.color)
  return (
    <ColorContext.Provider value={{color}}>
      {props.children}
    </ColorContext.Provider>
  )
}

