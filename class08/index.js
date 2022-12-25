// const arr = [10, 50, 20, 30, 50, 40, 50, 60];
// ============  indexof
// console.log(arr.indexOf(50))
// ========== includes
// console.log(arr.includes(53655650))
// ========== lastIndexof
// console.log(arr.lastIndexOf(5000))
// let new_arr = arr.join("###")
// console.log(typeof new_arr,new_arr)
// ========== ES6 functions


// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
const arr = [10, 50, 20, 30, 50, 40, 50, 60];
// let ans = arr.forEach(function (element){
//     // return element
// })
// console.log(ans)

// map
// let ans = arr.map(function (element){
//     return element
    
// })
// console.log(ans)
// let ans = arr.filter(function (values){
//  return values >= 30 
// })
// console.log(ans)

// ============ Functions in JS =============
// 1) Function Declaration  >>>>> ES5
// 2) Function expression   >>>>> ES5
// 3) Arrow Functions        >>>>> ES6

// 1) Function Delaration
function myName(name){    // function creation
    // function body
    // let myname = "My name is Ahteham"
    let myname = name
    console.log(myname)
    // return myname
}
// myName("i am Ayan")
// console.log(myname)
// let my_answer = myName()   // function calling
// console.log(my_answer)

// 2) Function Expression
let newFunc = function myName(name){    // function creation
    // function body
    // let myname = "My name is Ahteham"
    let myname = name
    console.log(myname)
    // return myname
}
// newFunc("i am ahtesham")
// 3) arrow Functions
let newFunc2 = (name)=>{
    let myname = name
    console.log(myname)
}
newFunc2("i am ahtesham")
/*
return keyword:- 
    1) only use inside a function 
    2) get back the answer outside the function or calling of the function
    3) you have to store anser in any variable to print
*/