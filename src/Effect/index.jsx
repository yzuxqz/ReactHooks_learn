import React, {useState, useEffect} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
function Home() {
  useEffect(() => {
    console.log('来了')
    return ()=>{
      console.log('离开')
    }
  },)
return <div>
  首页
</div>
}

function List() {
return (
  <div>
    列表
  </div>
)

}
function Effect() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
    return ()=>{
      console.log('离开')
    }
  },[count])
  return (
    <div>
      <h1>点击了{count}次</h1>
      <button onClick={()=>{setCount(count + 1)}}>点击啊</button>
      <button onClick={()=>{setCount(count)}}>不变</button>

      <BrowserRouter>
        <Link to='/home'>首页</Link>
        <Link to='/list'>列表</Link>
        <Route path='/home' component={Home}/>
        <Route path='/list' component={List}/>
      </BrowserRouter>
    </div>
  )
}

export default Effect
