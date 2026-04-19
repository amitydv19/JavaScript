// Declaration var let const
//Var
var a = 12;
var a = 13; // Var has no error

// let
let a = 12;
let a = 13;
//Uncaught SyntaxError: Identifier 'a' has already been declared (at script.js:7:5)

//const
const a = 12;
const a = 13;
//Uncaught SyntaxError: Identifier 'a' has already been declared

//Block Space
{
    let a = 12;
    console.log(a); // 12
}
//console.log(a); // Uncaught ReferenceError: a is not defined 
// this is called block space

//Function Scope
function test() {
    let a = 12;
    console.log(a); // 12
}
test();
// console.log(a); // Uncaught ReferenceError: a is not defined

//Global Scope
let a = 12;
function test() {
    console.log(a); // 12
}
test();