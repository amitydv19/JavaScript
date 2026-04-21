// Mindset Question: What will be the output of the following code and why?
//Question 1
// console.log(nm);
// var nm = "amit"; // Output: undefined

//Question 2
// console.log(age);
// let age = 25; // Output: Uncaught ReferenceError: Cannot access 'age' before initialization

//Question 3

// var x = 1; // Global variable

// {
//     var x = 2; // This will overwrite the global variable
//     console.log(x); // Output: 2
// }

let a = 20; // Block scope // Global
{
    let a = 10;
    console.log("Inside:", a) ;
}
console.log("Outside:", a) ;