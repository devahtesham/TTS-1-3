// const heading = document.querySelector("h1");
// const p = document.querySelector("p");
// // console.log(heading)
// // STYLING AN ELEMENT THROUGH JS
// heading.style.backgroundColor = "red"
// p.style.padding = "20px"

// =============== DATE OBJECT IN JS =================
// mm-dd-yyy
// const today = new Date()
// const today = new Date("11-16-22")
// console.log(today)
// let mydate = today.getDate()
// let mydate = today.getDay()
// let mydate = today.getFullYear()
// let mydate = today.getSeconds()
// let mydate = today.getMilliseconds()
// let mydate = today.getMinutes()
// let mydate = today.getHours()
// let mydate =today.getTime()
// const now = Date.now()
// ================= TIME STAMP

// const pak_ind = new Date("8-14-1947") // date of independence of pak
// const pak_time_stamp = pak_ind.getTime()
// // console.log("pak_time_stamp",pak_time_stamp)
// const today = new Date() // date of independence of pak
// const today_timne_stamp = today.getTime()
// // console.log("today_timne_stamp",today_timne_stamp)
// // difference b/w two events
// const diff = today_timne_stamp - pak_time_stamp
// // console.log("diff",diff)
// const seconds =  Math.floor( diff/1000)
// const minutes =  Math.floor( seconds / 60)
// const hours =  Math.floor( minutes / 60)
// const days =  Math.floor( hours / 24)
// const months = Math.floor( days / 30)
// const years = Math.floor(months / 12)

// console.log("years",years,"months",months,"days",days)
// const today = new Date()
// // today.setDate(15)
// console.log(today)
// // console.log(today.toDateString())
// // console.log(today.toLocaleDateString())
// console.log(today.toLocaleString())

// =================== DIGITAL CLOCK ============
const hours = document.getElementById("hr");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const date = document.querySelector(".date");

// console.log(today)

const showTime = () => {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const today_date = today.toDateString();
    hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  date.innerText = today_date;
  // console.log(h,m,s)
  
};

// setTimeout(()=>{
//     console.log("hello world")
// },2000)
setInterval(()=>{
    showTime()
}, 1000);
