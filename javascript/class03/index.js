/*
RELATIONAL OPERATORS
<
>
==
===
<=
>=
!==
*/
let a = 10;
let b = 11;
// let c = a<b; 
// let c = a>b; 
// let c = a==b; 
// let c = a===b; 
// let c = a!==b; 

// =========================================

/*
LOGICAL OPERATORS
&&     AND   true >>> when all conditions are true else false
||     OR    true >>> when any of one conditions is true else false
!      NOT   inverse
*/
let val1 = 10;
let val2 = 11;
let val3 = 12;
let val4 = 13;
let cond1 = val1 < val2  // true
let cond2 = val3 > val4  // false
// console.log("cond1",!cond1);
// console.log("cond2",cond2);
// let ans = cond1 && !cond2
// console.log("ans is:- ",ans)

// ================= ASSIGNMENT OPERATOR =====================
let x = 6              // assign operator
let y = -x
// x = x+3
// x = x-3
// x = x*3
// x = x-3
// x = x/3
// x+=3        // add assign
// x-=3        // subtract assign
// x*=3        // multiply assign
// x/=3        // divide assign
// console.log(y);
/*
================= DATA TYPES =====================
1) primitive    
    a) string
    b) number
    c) boolean
    d) null
    e) undefined
    f) NaN
    g) symbol

2) non-primitive / Refrence types
    a) array
    b) objects
    c) functions
*/ 
let str  = 45.2 ;
console.log(str,typeof str);