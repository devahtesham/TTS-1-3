/*
    1. Function declaration
    2. Function expression
    3.Arrow Function
*/
// Function declaration
// let myName = "ahtesham"
// function myname(username){
//     console.log("my name is",username)
// }
// myname(myName)

// Function expression
const displayName = function myname(name){
    if(name==="ahtesham"){
        console.log("NAME IS CORRECT")
    }else{
        console.log("NAME IS NOT CORRECT")
    }
}
// displayName()

// arrow function
// const myname = ()=>{

// }
// myname()

// ====================== closures ============
function outerFunc(){
    let num1 = 10
    let num2 = 20
    return function innerFunc(){
        let ans = num1+num2
       return ans
    }
}
const newFunc = outerFunc()
console.log(newFunc)