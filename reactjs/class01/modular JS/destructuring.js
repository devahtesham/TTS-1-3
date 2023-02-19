// Array destructuring
// let arr = [10,20,30,40,50,60,70]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// sequence/index matter
// const [num1,secondNum, ,num4] = arr
// console.log(num1,secondNum,num4)

// object destructuring
// let stdData = {
//     myName:"ahtesham",
//     course:"JS",
//     age:23,
// }
// stdData.myName
// name matter
// const {myName,age,course} = stdData
// console.log(myName,age,course)

// =========== spread and rest operator ============
// spread:- pull out
// rest:- pull in

// let arr = [10,20,30,40,50,60,70];
// let newArr = ["one","two",...arr,"four","five",]
// console.log("old array",arr)
// console.log("new array",newArr)
let stdData = {
    myName:"ahtesham",
    course:"JS",
    age:23,
}
let stdData1 = {
    address:"abc"
}
let newObj = {
    phone:123456789,
    ...stdData
}
// console.log(newObj)
// const {myName,course,age,address} = {...stdData,...stdData1}
// console.log(myName,course,age,address)


// ================== rest operator ===========
function showItems(...item1){
    let selectedItems = [...item1]
    console.log(selectedItems)
}
showItems("banana","apple","banana","apple",10,20,30)
