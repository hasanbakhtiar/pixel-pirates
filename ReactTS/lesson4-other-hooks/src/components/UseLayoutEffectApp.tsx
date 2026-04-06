import { useLayoutEffect, useState } from "react"

const UseLayoutEffectApp = () => {
    const [data,setData] = useState("Hello React");

    useLayoutEffect(()=>{
        setData('new value')
    },[])
  return (
    <div>{data}</div>
  )
}

export default UseLayoutEffectApp