import React,{useEffect,useState} from "react";

const UseEffectComp = ()=>{
    let [changeState,setChangeState]=useState(0)
    let [toggle,setToggle]=useState(false)

    console.log("component is render")

    useEffect(()=>{
        console.log("api is calling")
    },[foodorder])
    return(
        <>
            <h1>{changeState}</h1>
            <button className="btn btn-danger" onClick={()=>{
                    setChangeState(++changeState)
            }}>order food</button>
            <button className="btn btn-warning" onClick={()=>{
                setToggle(!toggle)
            }}>order history</button>
        </>
    )
}
export default UseEffectComp