
// =============== this keyword in js ==============
// console.log(this);
// function myFunc(){
//     console.log(this);
// }
// myFunc()
const std_1 = {
    std_name : "kareem",
    course:"React JS",
    fees:2000,

    myFunc:function(){
        console.log(this.std_name);
    },
    teaching:function(){
        console.log(this.std_name+" is teching "+this.course);
    }
}
// std_1.teaching()

// ======================= OOP ========
// create a class named CAR
class Car{
    constructor(model,make,color,price,year) {
        // properties
        this.model = model;
        this.make = make;
        this.color = color;
        this.price = price;
        this.year = year
    }
    automatic(){
        console.log(this.model +  " is automatic transmission");
    }
    hybrid(){
        console.log(this.model + " provide hybrid functionality in a price of" + this.price);
    }
}
let civic = new Car("CIVIC","Honda","black","40 lac","2012");
let abc_car = new Car("Corolla","Toyota","red","20 lac","2009")
// console.log(civic.hybrid());
// console.log(abc_car);

// 2nd class 
// inheritance
class SportsCar extends Car{
    
    constructor(model,make,color,price,year,exhaust,power){
        super(model,make,color,price,year);
        this.exhaust = exhaust
        this.enginePower = power
    }
    hydraulicBreaks(){
        console.log( this.model + " has hydraulic breaks ");
    }
}
let sports_car_1 = new SportsCar("Mustung","unknown","black","50 crore","2020","CAT BAG",2500);
sports_car_1.hydraulicBreaks()
