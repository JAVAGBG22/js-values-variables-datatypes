// VALUES & VARIABLES
/*
"Helena";
//console.log("Helena");

35;
//console.log(35);

let firstName = "Helena";
console.log(firstName);

// first name person
// let firstNamePerson;
// camel case common practice
// can not declare variables with a number

firstName = "Sara";
console.log(firstName);

//let 3years = 3;
// this gives us an error

//let new = 22;
// new is a reserved word in javascript so we can't use it as a variable name

//let name = "Helena";
// don't use name as a varible name can cause problems.

let weekOne = 47;
let weekTwo = 48;

let lastWeek = 47;
let currentWeek = 46;

// DATA TYPES

// boolean - can only hold the value of true or false

let youWillLearnJs = true;
//console.log(youWillLearnJs);

// Most important: strings, numbers and boolean

// typeof operator
//console.log(typeof true);
console.log(typeof youWillLearnJs);
//console.log(typeof 36);
//console.log(typeof "Helena");

youWillLearnJs = "YES";

console.log(typeof youWillLearnJs);

let day;
console.log(day);
console.log(typeof day);

day = "wednesday";
console.log(typeof day);

// error in the typeof operator
console.log(typeof null);


// LET, CONST & VAR

//let firstName = "Helena";

// let is used for varibles where the value can change in the future

let age = 30;
//console.log(age);

age = 31;
//console.log(age);

// const is used where the value can not change
const birthYear = 1985;
console.log(birthYear);

//birthYear = 1990;
//console.log(birthYear);
// does not work because you can not change the value of a varibale that is declared
// with the keyword const

// use const to declare variables as default ONLY use let when you are super sure that the
// value is going to change.

// var is the old way of defining variables before es6

var job = "developer";
console.log(job);

job = "teacher";
console.log(job);

lastName = "Johansson";
console.log(lastName);
*/

// BASIC OPERATORS

// mathematic operators

//const myAge = 2021 - 1985;
//console.log(myAge);

//const brothersAge = 2021 - 1991;
//console.log(myAge, brothersAge);

const now = 2021;
const myAge = now - 1985;
const brothersAge = now - 1991;
//console.log(myAge, brothersAge);

//console.log(myAge * 2, myAge / 10);

// concatinate
const firstName = "Helena";
const lastName = "Johansson";
//console.log(firstName + lastName);
//console.log(firstName + " " + lastName);

// assignment operator and the most straight forward one is =

let x = 10 + 5;
//console.log(x);

x += 10;
// x = x + 10 reassignning x value som x is 25
//console.log(x);

x *= 4;
// x = x * 4 = 100
//console.log(x);

x++;
// plus operator and it increases the value by 1
//console.log(x);

x--;
// minus operator and it decreasing the value by 1
//console.log(x);

// Comparison operators
console.log(myAge > brothersAge);
// checking if my age is greater than my brothers

console.log(brothersAge >= 18);
// greater or equal

const isFullAge = brothersAge >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 1985);
