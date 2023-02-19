import React,{useState} from "react";
import "./Form.css"
const Form = ()=>{
    // let [final_state,state_updating_function] = useState(initial_state)
    let [name,setName] = useState("ahtesham")
    
    
    let myName = "ahtesham"
    const displayName = ()=>{
        // console.log("function is calling")
        myName = "React JS"
        // console.log("myName",myName)
        setName("React JS")
    }
    return <>
       <div className="container">
            <h1>{name}</h1>
            <button onClick={()=>{
                displayName()
            }}>Click</button>
       </div>
    </>
}
export default Form