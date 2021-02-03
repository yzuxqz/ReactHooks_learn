import React,{useState} from 'react'
function HooksClick(){
    const [count,setCount] = useState(0)
    return(
    <div>
        <h1>点击了{count}次</h1>
        <button onClick={()=>{setCount(count+1)}}>点击</button>
    </div>
    )
}
export default HooksClick
