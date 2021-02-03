import React ,{useState,createContext,useContext} from 'react'
const CountContext = createContext()
function Counter() {
  let count = useContext(CountContext)
  return <h2>{count}</h2>
}

function Context() {
  const [count,setCount] = useState(0)
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>点击</button>
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
    </div>
  )
}
export  default Context
