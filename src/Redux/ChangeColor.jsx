import React from 'react'
import {useDispatch} from 'react-redux'
import {createChangeColorAction} from "./redux/action";
function ChangeColor() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(createChangeColorAction('red'))}}>红色</button>
      <button onClick={()=>{dispatch(createChangeColorAction('blue'))}}>蓝色</button>
    </div>
  )
}

export default ChangeColor
