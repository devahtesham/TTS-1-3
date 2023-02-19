import React from "react"
import Banner from "./Banner"

const Header = ()=>{
    return( 
        <>
            <span className="my-Text">Learning React JS</span>
            <h1 style={{color:"red",backgroundColor:"#000"}} > Thius is my Header component</h1>
            <Banner />
        </>
    )
}
export default Header