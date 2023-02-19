// 1) click
// const btn = document.querySelector(".btn")


// function showMessage(){
//     alert("hello World")
// }
// 1st method
// btn.addeListener("click",()=>{
//     alert("hello World")
// })

// 2st method
// btn.addeListener("click",showMessage)

// 3st method
// btn.addeListener("click",()=>{
//     showMessage()
// })

// 2) submit
// const form = document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let name = e.target.name.value
//    let email = e.target.email.value
//    let password = e.target.password.value

//     if (name==="" || email==="" || password===""){
//         alert("Invalid Input !")
//     }else{
//         console.log(name,email,password)
//        console.log("Form Submitted successfully !")
//     }
// })

// 3) moueover
// const btn = document.querySelector(".submit-btn")
// btn.addEventListener("mouseover",()=>{
//     console.log("Hover on button ")
// })
// 3) blur
//  const input = document.getElementById("name")
//  input.addEventListener("blur",()=>{
//      console.log("you loose focus ")
//  })

// 3) change
//  const input = document.getElementById("name")
//  input.addEventListener("change",()=>{
//      console.log("input status is changing")
//  })
// 3) keyup
//  const input = document.getElementById("name")
//  input.addEventListener("keyup",()=>{
//      console.log("input status is changing")
//  })
// 3) keyup
 const para = document.getElementById("para")
 para.addEventListener("copy",()=>{
     console.log("You are copying my content")
 })