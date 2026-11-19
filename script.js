// let obj = { name: 'raj', age: 10, };
// // syntax of json obj { "name": "raj", "age": 10 };
// let converted = JSON.stringify(obj);
// console.log(converted);
// console.log(JSON.parse(converted))

// localstorage 
// localStorage.setItem("users",
//     JSON.stringify([{ name: "raj" }, { name: "naman" }])
// );
// let getdata = localStorage.getItem("users");
// console.log(JSON.parse(getdata));
// localStorage.removeItem("users");
// localStorage.clear();

// Regex
let str = "test@gmail.com";
let mob = 2
let user = `hello world`

let pat1 = /\d/ //digit //patters
let pat2 = /\w/ // word 
let pat3 = /\s/ //space
console.log(pat1.test(mob));
let pat4 = /h./;//any charcter except new line;
console.log(pat4.test(user));
let pat5 = /^hello/; //startswith
let pat6 = /world$/; // ends with
console.log(pat6.test(user));

let pat7 = /\d{3,5}/ //repeatation
console.log(pat7.test(1334));
// let pat8 = /h*h/
// let pat8 = /h+h/
let pat8 = /h?h/ //the h present atleat one time in the string
console.log(pat8.test("hello"))
let pat9 = /[^abc]/ //this text is not avialable in the string
console.log(pat9.test("fkjvjfkd"))
let pat10 = /(cat|dog)/;
console.log(pat10.match("other"))//any one is present

let pat11 = /at\b/; //word last is at;
console.log(pat11.test("cat"));//true word ends with "at";

// let pat12 = /\w(?='+')/;
// console.log(pat12.test("hello+"))
let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(isEmail.test("raj@gmail.com"));

let isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
console.log(isStrongPassword.test("Abc123456"));