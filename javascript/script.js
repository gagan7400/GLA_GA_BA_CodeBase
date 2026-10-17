// // // // // console.log("file connected");

// // // // // // keyword identifier/varibalename assignment data
// // // // // let price = 4000; // number
// // // // // const discount = false;// boolean , null ,undefiend
// // // // // // Object , Array,function  , Symbol , BigInt

// // // // // data = "hello world";
// // // // // console.log(data);


// // // // // // var keyword
// // // // // // scope - globally scoped and functional scoped
// // // // // // we can reassign value .
// // // // // // reclaration is also possible

// // // // // // function test() {
// // // // // //     var username = "harry";
// // // // // //     console.log(username)
// // // // // // }
// // // // // // console.log(username)
// // // // // // hoisting  , moved all the declration to the top of the  file  , but it cannot move the data
// // // // // console.log(user)
// // // // // var user = "harry";//string

// // // // // console.log(user);
// // // // // user = 100; // reassignment
// // // // // console.log(user);
// // // // // var user = "another user"; // redeclaration
// // // // // console.log(user);


// // // // // // let and const
// // // // // //  Let keyword is blocked scoped variable,
// // // // // // we can reassign its value , but cannot redeclare it.

// // // // // // console.log(time);
// // // // // let time = "morning";
// // // // // console.log(time);
// // // // // // {
// // // // // //     let date = 12 ;
// // // // // // }
// // // // // // console.log(date);it show error becauseof blocked scope of let keyword
// // // // // time = "evening";
// // // // // console.log(time)

// // // // // // var time = "night"; redeclaration isnot possible here

// // // // // // let and const
// // // // // //  const keyword is blocked scoped variable,
// // // // // // we cannot reassign its value , and also cannot redeclare it.
// // // // // const For = "raj";

// // // // // // variable naming rules
// // // // // // cannot start with numberical value
// // // // // //do not use any special charchter , except _ and $ ,
// // // // // // do not use any space btween variable names
// // // // // // do not use any reserved keyword .

// // // // // // data types of data

// // // // // //primitive and  non primitive data types
// // // // // // string ,number,BigInt ,Boolean , null , undefined
// // // // // // symbol
// // // // // // array ,object , function
// // // // // console.log(typeof (null));
// // // // // console.log(typeof ([]));
// // // // // console.log(typeof ({}));


// // // // // // operators
// // // // // // arithmatic operator  + ,- ,* , / ,**, %
// // // // // let a = 10;
// // // // // let b = 20;
// // // // // console.log(10 + "10");
// // // // // console.log(10 - "10");

// // // // // // comparison operator
// // // // // //  < , > ,<=,>= ,== ,=== ,!= ,!==
// // // // // console.log(10 < 11)
// // // // // console.log(10 > 9)
// // // // // console.log(10 <= 10)
// // // // // console.log(10 >= 3)
// // // // // console.log(10 == '10')
// // // // // console.log(10 === '10');
// // // // // console.log(10 != '10');
// // // // // console.log(10 !== '10');

// // // // // // asignement operator
// // // // // // = , +=, -=,/=,*= , **= , %= , ++ , --
// // // // // let p = 10;
// // // // // console.log(p)
// // // // // p += 10;
// // // // // console.log(p)
// // // // // p -= 10;
// // // // // console.log(p);
// // // // // p *= 10
// // // // // console.log(p)
// // // // // p **= 10
// // // // // console.log(p);

// // // // // // increment++  and decrement--
// // // // // // increment is used to increase the value 1 by 1 and it  is divided in two  type pre increment and post increment ,
// // // // // // ++p ,// pre increment ,first increment and then use/print
// // // // // // p++ post increment .first print/use then increment

// // // // // let x = 10;
// // // // // // x++
// // // // // console.log(x++, x);
// // // // // console.log(x++  + ++x)
// // // // // console.log(x);
// // // // // // decrement is used to decrease the value 1 by 1 and it  is divided in two  type pre decrement and post decrement ,
// // // // // // ++p ,// pre decrement ,first decrement and then use/print
// // // // // // p++ post decrement .first print/use then decrement
// // // // // let j =10;
// // // // // --j
// // // // // console.log(j) ;

// // // // // console.log(--j + j );

// // // // // //logical operator
// // // // // // && ,|| ,!
// // // // // console.log(true && true) //true
// // // // // console.log(true && false) //false
// // // // // console.log(false && true) //false
// // // // // console.log(false  && false ) //false

// // // // // // console.log(false && "hello");
// // // // // console.log(true || true) //true
// // // // // console.log(true || false) //true
// // // // // console.log(false || true) //true
// // // // // console.log(false  || false ) //false

// // // // // console.log(true || "hello")
// // // // // console.log(false || "hello")

// // // // // // ! not
// // // // // console.log(!true)
// // // // // console.log(!false)
// // // // // console.log(!0)
// // // // // console.log(!1)
// // // // // console.log(!null)
// // // // // console.log(!undefined)
// // // // // console.log(![])
// // // // // console.log(!"bn")
// // // // // console.log(!"")


// // // // // // scope
// // // // // //global scope
// // // // // // ,block scope
// // // // // // function scope \


// // // // // // type conversion

// // // // // //type coerison
// // // // // console.log(10 - '10');
// // // // // console.log(10 + '10');

// // // // // //type convesion
// // // // // // Number ,Boolean , String
// // // // // console.log(Number("10"))
// // // // // console.log(Number("dds"))
// // // // // console.log(Boolean("dfd"))
// // // // // console.log(Boolean(0))
// // // // // console.log(String(100))
// // // // // console.log(String(true));


// // // // // // Math Object
// // // // // console.log(Math.random() * 99999 )
// // // // // console.log(Math.round(4.6))
// // // // // console.log(Math.floor(4.3));//rounds down the value
// // // // // console.log(Math.abs(-10))//absolute positive value
// // // // // console.log(Math.max(10,100,11));
// // // // // console.log(Math.min(10,100,11));
// // // // // console.log(Math.sqrt(144))
// // // // // console.log(Math.pow(2,2))
// // // // // console.log(Math.ceil(5.1))


// // // // //14oct topics ,Lecture 3
// // // // // String , if-else,else-if,nested if ,switch,ternary operator
// // // // //string
// // // // // collection on charchters , immutable data 
// // // // // let str = ' hello world ';
// // // // // let str2 = "hello world";
// // // // // let str3 = `hello world`;//template litral/string
// // // // //string methods ,length
// // // // // console.log(str);
// // // // // console.log(str2);
// // // // // console.log(str3);
// // // // let str = "this is the first string";
// // // // console.log(str.length);
// // // // console.log(str.at(10));//undefined
// // // // console.log(str.charAt(10));// empty
// // // // console.log(str.at(-1));//last index value
// // // // console.log(str.charAt(-1));//empty/
// // // // //charCodeAt , indexOf ,lastIndexOf ,includes
// // // // console.log(str.charCodeAt(0));
// // // // // a-b :- 97-122 ,A-B:- 65-90 ,0-9:- 48-57 ,space:-32.
// // // // console.log(str.indexOf("i"))//2
// // // // //it print -1 when the given  charchter is not available in the string
// // // // console.log(str.lastIndexOf("i"));
// // // // console.log(str.includes("this")); // boolean

// // // // str = " This is the First String ";
// // // // console.log(str.startsWith(" this"));;//false 
// // // // console.log(str.endsWith("is"));;//false
// // // // console.log(str.concat(" new string "));;
// // // // console.log(str + " new string ");;
// // // // // used to merge the strings
// // // // console.log(str.toUpperCase());
// // // // console.log(str.toLowerCase());
// // // // console.log(str)
// // // // console.log(str.trim())
// // // // console.log(str.trimStart())//remove the starting extraspace
// // // // console.log(str.trimEnd())//remove the ending extraspace
// // // // let data = "this is the new text";
// // // // // data = "helllllllllllo"//reassginment
// // // // // console.log(data, data.length);
// // // // console.log(data.padEnd(7, "0"))
// // // // console.log(data.padStart(8, "+"))//maxlength , fullfiling value
// // // // console.log(data.replace("l", "k"));
// // // // console.log(data.replaceAll("l", "k"));
// // // // console.log(data.split(" "));

// // // // let name = prompt("pls enter your name");
// // // // //prompt always gives us string data type ;

// // // // // console.log(name, typeof (name));
// // // // // find the length of the name
// // // // // console.log(name.length);
// // // // // count words
// // // // console.log(name);
// // // // console.log(name.split(" ").length);
// // // // console.log(name.trim().split(" ").length);

// // // // ternary operator
// // // // condition ? true : false ;
// // // let condition = !true ? "hello world" : "not found"

// // // console.log(condition)

// // // console.log(true ? "hello world" : "not found")

// // // // if ,if else , else if ladder ,nested if

// // // // conditionals :- if

// // // if (true) {
// // //     console.log("condition is true")
// // // };

// // // if (false) {
// // //     console.log("condition is true");
// // // } else {
// // //     console.log("condition is false");
// // // }

// // // let num = Number(prompt("enter any number"))
// // // console.log(num);
// // // if (num > 0) {
// // //     console.log(num)
// // // } else {
// // //     console.log(-num)
// // // }

// // // //15 oct topics ,Lecture 4
// // // // if, if-else, switch, ternary operator Lab: Age Eligibility Checker (Task 5)
// // // // for, while, do-while, Nested Loops;

// // // // else if ladder 
// // // // syntax 
// // let day = "monday";
// // if (day == "tuesday") {
// //     console.log("this is tuesday");
// // } else if (day == "monday") {
// //     console.log("day is monday");
// // } else if (day == "wednesday") {
// //     console.log("day is wednesday");
// // } else {
// //     console.log("this is not monday");
// // }
// // // find the largest number btw three user inputs;
// // let a = prompt("enter first digit");
// // let b = prompt("enter second digit");
// // let c = prompt("enter third digit");
// // if (a == b && b == c && c == a) {
// //     console.log("all are equal");
// // } else if (a > b && a > c) {
// //     console.log(a, " is lagrest number");
// // } else if (b > c && b > a) {
// //     console.log(b, " is lagrest number");
// // } else {
// //     console.log(c, " is largest");
// // };
// // // take the marks of the student and print the grade according to this grade marking
// // //  90-100 A ,
// // // 75-90 B ,
// // //  50-75: C ,
// // //  below 50 D(Failed);
// // // grade : A //output;

// // // take a user input and find its diffrence from 13 ,if the diffrence is less than 13 then print its double and it the diffrence is greater than 13 then print it as it is

// // // nested if 
// // if (true) {
// //     if (true) {
// //         if (!true) {
// //             console.log("all three conditions are true")
// //         } else {
// //             console.log("last condition is not true")
// //         }
// //     } else {
// //         console.log("second condtition is not true")
// //     }
// // } else {
// //     console.log("first condition is not true")
// // };
// // // nested if code example
// // //
// let age = prompt("enter your age");
// if (age >= 18) {
//     let nationality = prompt("enter your nationality");
//     if (nationality == "indian") {
//         let crime = confirm("criminal or not");
//         if (crime == false) {
//             console.log('able to vote')
//         } else {
//             console.log("not able to vote because of crime")
//         }
//     } else {
//         console.log("not able to vote because of nationality is not indian")
//     }
// } else {
//     console.log("not able to vote")
// }


// // switch case
// let day = "fridaysdvkmsdfv "
// switch (day) {
//     case "monday": console.log("day is Monday") ; 
//     case "tuesday": console.log("day is tuesday") ; 
//     case "wednesday": console.log("day is wednesday") ; 
//     case "friday": console.log("day is friday") ; 
//     default: console.log('holiday')
// }
let day = "fridaysdvkmsdfv "
switch (day) {
    case "monday": console.log("day is Monday"); break
    case "tuesday": console.log("day is tuesday"); break
    case "wednesday": console.log("day is wednesday"); break
    case "friday": console.log("day is friday"); break
    default: console.log('holiday')
}


//loop:- for while do while

// for
for (let i = 1; i <= 10; i++) {
    console.log(i)
}