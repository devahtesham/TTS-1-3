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
// fetch("https://fakestoreapi.com/products").then(response => response.json())
// .then((data)=>{
//     const card = document.getElementById("productCard");
//     // console.log(data)
//     data.map((prod)=>{
//         let prodImg = prod.image;
//         let prodTitle = prod.category;
//         let prodDescription = prod.description;
//         let prodPrice = prod.price;

//         card.innerHTML += `
//             <div class="col-md-3 border" >
//                 <div>
//                     <img src="${prodImg}" alt="" class="w-100">
//                 </div>
//                 <h3>${prodTitle}</h3>
//                 <p>${prodDescription}</p>
//                 <h3>${prodPrice}</h3>
//             </div>
//             `
//     })
// }).catch((error)=>{
//     console.log("THIS IS THEN CATCH")
//     console.log(error)
// })

// ================ API FETCHING USING ASYNC AWAIT ===========
const getApiData = async () => {
    const card = document.getElementById("productCard");
    try {
        // which can cause an error
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        data.map((prod) => {
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
                `;
          });
    } catch (error) {
        console.log("You have an error in response")
    }
  
};
// getApiData();

// ======================= PAGE REDIRECT WITH JS =============
// const btn = document.querySelector(".btn-page");
// setTimeout(()=>{
//     window.location.href = "https://getbootstrap.com/docs/5.0/getting-started/introduction/"
// },3000)
// btn.addEventListener("click",()=>{
//     window.location.href = "https://getbootstrap.com/docs/5.0/getting-started/introduction/"
// })
// alert("hello world")
// window.print()
// console.log(Number.isNaN(2*"ahtesham"))

// ================================ CONSISE METHOD ============
let myname = "ahtesham"
let course = "JS"
let myobj = {
    myname,
    course,
    teaching(){
        console.log(`${this.myname} is teaching`)
    }
}
console.log(myobj.teaching())