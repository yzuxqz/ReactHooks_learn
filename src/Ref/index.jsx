import React ,{useRef}from 'react'
function Ref() {
  const textRef= useRef(null)

  return(
    <div>
      <input type="text" ref={textRef}/>
      <button onClick={()=>{
        console.log(textRef.current.value)}}>点击</button>
    </div>
  )
}
export default Ref
