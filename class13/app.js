// ==================== Math Object =================
// 1) PI
// let x = Math.PI

// // 2) sqrt
// let x = Math.sqrt(16)

// 3) power
// let x = Math.pow(2,3)
// console.log(x)

// 3) cube root
// let x = Math.cbrt(8)
// console.log(x)

// 3) round
// let x = Math.round(6.33)
// let x = Math.round(6.5)
// console.log(x)

// 3) Random
//  let x = Math.random()
//  console.log(x)

// 4) floor
// let x = Math.floor(6.9)
// console.log(x)

// 4) ceil
// let x = Math.ceil(6.1)
// console.log(x)

// 4) sin
// let x = Math.sin(90)
// let y = Math.cos()
// let z = Math.tan()
// console.log(y)

// 5) log
// let x = Math.log10(10)

//  console.log(Math.round(x))


// ==================== CALCULATOR =============
// const btn1 = document.getElementById("1")
// const btn2 = document.getElementById("2")
// const btn3 = document.getElementById("3")
const btn = document.querySelectorAll("button");
const screen = document.getElementById("screen")
btn.forEach((mybtn)=>{
    mybtn.addEventListener("click",(e)=>{
        // console.log(e.target.id)
        screen.innerText += e.target.id
        
    })
})
