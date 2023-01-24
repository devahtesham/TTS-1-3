/*
DATA TYPES IN JS
1.primitive
    a. string
    b. number
    c. boolean
    d. undefined
    e. null
    f. NaN
    g. symbol
2. non-primitive/Reference type
    a. array
    b. object
    c. functions
*/

// =============== OBJECT ===========
// OLD JS / Common JS ES5
// const myObj = new Object();         // create object with construtor

// NEW JS ES6 / Advance JS
const stdObj = {         // create object with object literal
    // properties
    std_name:"ahtesham",
    std_course:"JAVASCRIPT",
    fees: 500,
    // methods
    teaching:function(){
        console.log("He is a good teacher")
    }
}    
const stdObj2 = {         // create object with object literal
    // properties
    std_name:"Qasim",
    std_course:"react",
    fees: 600,
    // methods
    studying:function(){
        console.log("He is a studing well")
    }
}    
// function studying() {
//     console.log("He is a studing well")
// }                  
// console.log(stdObj.std_name)
// console.log(stdObj["std_name"])
// stdObj.salary = 10000     // add property in object
// stdObj.study = studying
// delete stdObj.teaching
// console.log(stdObj)

// ============== DESTRUCTURING =============

// console.log(stdObj.std_name,stdObj.std_course,stdObj.fees)


// let {std_name,std_course,fees} = stdObj             // object destructure
// console.log(std_name,std_course,fees)

// console.log(Object.keys(stdObj))
// console.log(Object.values(stdObj))

// =============== LOOPING ON AN OBJECT ============
// for(let keys in stdObj){
//     console.log(keys,stdObj[keys])
// } 

