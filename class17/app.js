/*
    JAVASCRIPT CODE EXECUTION UNDER THE HOOD
    javascript is an interpreted programming language. javascript bydefault synchronous
    1. synchronous way
    2. asynchronous way 

synchronous:- 
    line by line execution

*/
// setTimeout(()=>{
//     console.log("stataement 01")
// },2500)

// setTimeout(()=>{
//     console.log("stataement 02")
// },2000)
// setTimeout(()=>{
//     console.log("stataement 03")
// },3000)
// console.log("hello")
// console.log("api call") // time duration
// console.log("hello world")

// ================ CALL BACK FUNCTION EXAMPLE ===============
// let studentDB = [
//     {
//         std_name: "ahmed",
//         age:23,
//         course:"JS"
//     },
//     {
//         std_name: "subhan",
//         age:19,
//         course:"REACT JS"
//     },

// ]
// const addStudentData = (stdData,callback)=>{
//     // console.log(stdData)
//     setTimeout(()=>{
//         studentDB.push(stdData)
//         callback()
//     },2500)
// }
// const getStudentData = ()=>{
//    setTimeout(()=>{
//     studentDB.forEach((data)=>{
//         console.log(data)
//     })
//    },1500)
// }

// let stdRecord = {
//     std_name: "amjad",
//     age:18,
//     course:"html"
// }
// addStudentData(stdRecord,getStudentData)
// getStudentData()

// ======================= TEMPLATE STRING/LITERAL ======================
// let fName = "hello"
// let mName = "javascript"
// let lName = "developer"
// // let fullName = "Assalamoalikum" + " " + fName + " "+ mName + " " + lName + " " +  "Tata bye bye"
// let fullName = `Assalamoalikum ${fName} ${mName} ${lName} Tata bye bye`
// console.log(fullName)

// ================== LOCAL STORAGE ============