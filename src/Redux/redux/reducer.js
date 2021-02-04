import {CHANGECOLOR} from "./constant";

const initState={color:'yellow'}
export default function colorReducer(prestate=initState,action) {
    switch (action.type) {
      case CHANGECOLOR:
        return {color:action.data}
      default:
        return prestate
    }
}
