import React,{useState} from "react";
const ConditionalRendering = ()=>{
    const [showPara2,setShowPara2] = useState(false)
    const clickHandler = ()=>{
        setShowPara2(!showPara2)
    }

    // if(showPara2){
    //     <p>This is para 2</p>
    // }

    return(
        <div className="container mt-5">
            <p>This is para 1</p>
            {
                showPara2 ? <p>This is para 2</p>:""
                // showPara2 && <p>This is para 2</p>
            }
            <div>
                <button className="btn btn-primary" onClick={clickHandler}>Click</button>
            </div>
        </div>
    )
}
export default ConditionalRendering