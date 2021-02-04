import React,{useState,useEffect,useCallback} from 'react'


function useWinSize() {
  const [width,setWidth] = useState(document.body.clientWidth)
  const [height,setHeight] = useState(document.body.clientWidth)

  const reSize=useCallback(()=> {
    setWidth(document.body.clientWidth)
    setHeight(document.body.clientHeight)
  },[])

  useEffect(()=>{
    window.addEventListener('resize',reSize)
    return ()=>{
      window.removeEventListener('resize',reSize)
    }
  },[])

  return ({width,height})
}

export default function UseWinSize() {
  const {width,height} = useWinSize()
  return(
    <div>
      <h1>{width}</h1>
      <h1>{height}</h1>
    </div>

  )
}
