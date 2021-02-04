import {CHANGECOLOR} from "./constant";

export const createChangeColorAction=(newColor)=>{
  return {type:CHANGECOLOR,data:newColor}
}
