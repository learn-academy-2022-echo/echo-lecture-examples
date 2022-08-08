// Functions, Loops, Arrays Echo 8/8/2022

// Functions - logic machines use to create reusable/dynamic code

// var randomNums = [5, 10, 6, 2, 12, 8, 42]
// var number = [3]
// PROMPT
// Create a function that returns the array with each value squared.

// PSEUDOCODE
// declare a function called myNumbers 
// input/parameter - an array of numbers
// expected output - new array with each value squared
// [25, 100, 36, 4, 144, 64, 1764] 


// FUNCTION
// const myNumbers = (array) => {
//   return array **2
// }

// console.log(myNumbers(number));
// // Output: 9

// console.log(myNumbers(randomNums));
// // Output: NaN because you have a collection of values in 

// var randomNums = [5, 10, 6, 2, 12, 8, 42]
// var number = [3]

// array is a parameter, a placeholder to tell the function to expect data
// const myNumbers = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     // use bracket notation to abstract each value within the array
//     return array[i]**2
//   }
// }

// use the actual values as an argument
// console.log(myNumbers(randomNums));
// Output: 25

// use a variable to store the values in an array
// var randomNums = [5, 10, 6, 2, 12, 8, 42]
// var number = [3]

// const myNumbers = (array) => {
//   // variable that keep track of the values
//   let newArray = []
//   for(let i = 0; i < array.length; i++) {
//     // use bracket notation to abstract each value within the array
//     newArray.push(array[i]**2)
//     // console.log(newArray)
//   } return newArray 
// }

// console.log(myNumbers(randomNums));
// Output: [ 25, 100, 36, 4, 144, 64, 1764 ]

// console.log("randomNums:", randomNums)
// console.log("newArray:", newArray) // cannot access the variable that is within the function block
