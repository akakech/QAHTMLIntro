"use strict"; // Best practice is to always use this mode since it tells the JS version to be ES6+, removing things like implied globals.
let firstName = "Bill";
let surname = "Wiliams";
let countryOfOrg = "England";
let starSign = "virgo";

console.log(`Hello I am ${firstName} ${surname} I am from ${countryOfOrg} and my star sign would be ${starSign}`);
// console.error(starSign);
// console.info(surname);
// console.warn(countryOfOrg);

let favouriteCar = "Audi";
let audiObj = {String: "Audi", String: "A5"}

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

sayHello();

function sayHello() {
    return console.log("Someone says hello");
  }

  let strictA = true; //Boolean
  let strictB = 1; //Integer

console.log(strictA == strictB);//true
console.log(strictA === strictB); //false since it checks type and value

console.log(strictA != strictB);//false
console.log(strictA !== strictB);//true false since it checks type and value

numChecker(34);

function numChecker(age) {
    let numIsBetween = false;

    if (age > 18 && age < 65) {
        numIsBetween = true;
        return console.log(`${age} is between 18 and 65! You win!`);
    } else {
        numIsBetween = false;
        return console.log("Number not between 18 and 65.");
    }
}




