// Javascript Conditionals Echo 8/3/22

// Conditional statements aka decision trees, if/else statements, conditionals
// Conditionals create logic through evaluations that return a Boolean value and then the conditional produces an outcome based on that Boolean value.
// Only one outcome per conditional

// Evaluations/comparisons created by operators
  // Equality operators == loose, === strict
  // Relational operators > < >= <=
  // Logical operators && And, || Or, ! Bang operator/Negation

// Structure of conditional statements
// if is a keyword in javascript, helps make a decision on information passed through a set of ()
// if(statement/condition){
// code block that contains executable code
// }
// if(true){
//   console.log("first conditional: I'm true")
// }
// Output: I'm true
// if statement is false, then nothing happens. Conditionals look for true statements.
// if(false){
//   console.log("second conditional: I'm false")
// }
// Output: No output

// else is a keyword in javascript that runs if no other statement is true. catch all. It does not take in a condition.
// if(false){
//   console.log("second conditional: I'm false")
// } else {
//   console.log("second conditional: else statement")
// }
// Output: second conditional: else statement

// var myName = "Web Developer Charlean"

// if(myName === "Web Developer Charlean"){
//   console.log("Aloha!")
// } else {
//   console.log("Here is the else!")
// }
// // Output: Aloha!
// myName = "Charlean"
// console.log(myName)
// // Output: Charlean
// if(myName === "Web Developer Charlean"){
//   console.log("Aloha!")
// } else {
//   console.log("Here is the else!")
// }
// Output: Here is the else!

// else if is a keyword in javascript that covers additional statements. Only use one if and one else per conditional

var myName = "Web Developer Charlean"

if(myName.length <= 8){
  console.log("The length of my name is less than or equal to eight.")
} else if(myName.length !== 8){
  console.log("The length of my name is not less than or equal to eight.")
} else {
  console.log("Else because that is a lie!")
}

myName = "Charlean"
if(myName.length <= 8){
  console.log("The length of my name is less than or equal to eight.")
} else if(myName.length !== 8){
  console.log("The length of my name is not less than or equal to eight.")
} else {
  console.log("Else because that is a lie!")
}

