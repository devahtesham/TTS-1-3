// ================== LOCAL STORAGE ============
// let myName = "ahtesham";
// add data in LS
// localStorage.setItem("NAME",myName)

// let value = localStorage.getItem("NAME")
// console.log("value",value)

// ================
// window.onload = ()=>{
//     // let myItem = localStorage.getItem("data1");
//     console.log("myItem",myItem)
//     const items = document.querySelector(".items");
//     items.innerHTML += `
//         <div class="alert alert-success">
//             ${myItem}
//         </div>
//     `
// }

// const form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
  
//     // let arr=[]
//     let value = e.target.searchBar.value;
//     // // console.log(value)
//     // // localStorage.setItem("data1",value)
    
//     const items = document.querySelector(".items");
//     items.innerHTML += `
//         <div class="alert alert-success">
//             ${value}
//         </div>
//     `
//     // e.target.searchBar.value = ""
//     // form.reset()
// })
// ===================== REMOVE ANY ITEM IN LOCAL STORAGE ===================
//  localStorage.removeItem("data1")
// ================== IN CASE OF OBJECT AND ARRAY ===============
// let myobj = {
//     std_id:1,
//     std_name:"ahtesham",
//     course:"JS",
// }
// JS object to JSON format
// let newData = JSON.stringify(myobj)
// // console.log(myobj)
// localStorage.setItem("STDENT DATA",newData)
// let myData = localStorage.getItem("STDENT DATA")
// // console.log("myData",myData)
// // JS object to JSON format
// let data = JSON.parse(myData)
// // const items = document.querySelector(".items");
// // items.innerHTML = myData
// console.log(data,"data")
// let mernStack = ["mongodb","express","reactjs","Nodejs"]

// localStorage.setItem("tech stack",JSON.stringify(mernStack))
// let array_data = JSON.parse(localStorage.getItem("tech stack"));
// // for(let value of array_data){
// //     console.log(value)
// // }
// localStorage.clear()

// ==================== PROMISES IN JAVASCRIPT ===================
// 1. pending
// 2.Fullfill
// 3. reject
// const myFunc = ()=>{
//     return new Promise((resolve,reject)=>{
//         let apiError = true
//         if(!apiError){
//             resolve("Promise has resolved !!");
//         }else{
//             reject("Your Promises has rejected !")
//         }
//     })
// }
// myFunc().then((response)=>{
//     console.log("Successfully resolved !",response)
// }).catch((error)=>{
//     console.log("Promise Failed ",error )
// })
// =========== promise.all() ==================
/*
promise.all([]) accepts array of promises
*/
// ================== HTTP SERVER STATUS CODES ============
/*
    200 ======>> OK, successffully
    500 ======= >> error, internal server error
    404 ======= >> invalid response
*/

// ================== FETCH API ============
/*
    API REQUEST TYPES:-
    CRUD:- Create Read Update Delete
    1. GET
    2. POST
    3. PUT
    4. DELETE
*/
// whenever we deal with api, we use fetch
// syntax:- fetch("api/url","method")
fetch("https://fakestoreapi.com/products").then(response => response.json())
.then((data)=>{
    const card = document.getElementById("productCard");
    // console.log(data)
    data.map((prod)=>{
        let prodImg = prod.image;
        let prodTitle = prod.category;
        let prodDescription = prod.description;
        let prodPrice = prod.price;

        card.innerHTML += `
            <div class="col-md-3 border" >
                <div>
                    <img src="${prodImg}" alt="" class="w-100">
                </div>
                <h3>${prodTitle}</h3>
                <p>${prodDescription}</p>
                <h3>${prodPrice}</h3>
            </div>
        `  
    })
    // let prodObj = data[0]
    // let prodImg = prodObj.image;
    // let prodTitle = prodObj.category;
    // let prodDescription = prodObj.description;
    // let prodPrice = prodObj.price;


    // card.innerHTML = `
    //     <div class="col-md-3 border" >
    //         <div>
    //             <img src="${prodImg}" alt="" class="w-100">
    //         </div>
    //         <h3>${prodTitle}</h3>
    //         <p>${prodDescription}</p>
    //         <h3>${prodPrice}</h3>
    //     </div>
    // `  
   
}).catch((error)=>{
    console.log("THIS IS THEN CATCH")
    console.log(error)
})