// Javascript Introduction Echo 8/3/22



// JavaScript is an Interpreted language
  // Node - a javascript runtime interpreter
  // $ node <filename.js>
// JavasScript is a scripting language
  // create commands and logic to be executed on
// JavaScript dynamically typed 

// Data is descriptive information about something
  // something real or abstract

// JavaScript has 6 primitive Data Types
  // Number
    24
    // Integers
      // Whole numbers 
        1
        2
        3
    // Float
      0.02
    // Numbers can be Positive or Negative 
      -1000 
      1000

// Console.log
  // The command we use to make things show up in our terminal
  // run the console.log using the command $ node <filename.js> 
    
    // Numbers allow us to do math
      // mathematical operators
        // Addition
          40 + 60
          console.log(40 + 60)
        // Subtraction 
          40 - 60
          console.log(40 - 60)
        // Multiplication 
          40 * 60
          console.log(40 * 60)
        // Division
          60 / 3
          console.log(60 / 3)
        // PEMDAS
          console.log(3 / 3 * 3 + 3)
        // Exponents 
          console.log(3 ** 3)
        // Modulo 
          100 % 5
          console.log(100 % 5)
          console.log(10 % 5)
          console.log(10 % 3)
          console.log(42 % 2)
        
  // String
    // Characters held in double quotes
    // Communicating language to other humans or manipulating data
      "White yeti mug"
      console.log("White yeti mug")
    // String Properties
      // length
        console.log("White yeti mug".length)
      // Index - square brackets above double quotes on keyboard
        console.log("White yeti mug"[2])
      // Strings are zero indexed
        console.log("White yeti mug"[0])
  // Boolean
    // a binary data type that is either true or false
    true
    false 
    // Booleans can be used for comparisons of data
      console.log(20 > 21)
      //  Relational Operators
        // <, >, <=, >=
        console.log(5 > 10)
        console.log(5 < 10)
        console.log("squid12".length >= 8)
        console.log("squid1234".length >= 8)
      // Equality Operator
        // Strict Equality
          console.log( 8 === 8)
          console.log(8 === "8")
        // Loose Equality 
          console.log(8 == "8")
        // Type Coercion 
          console.log(2 + "2")
          console.log(true == "true")
      // Logical Operator
        // && AND 
          console.log(true && true)
          console.log(true && false)
          console.log(false && false)
          console.log(5 < 10 && 20 > 21)
        // || OR
          console.log(5 < 10 || 20 > 21)
        // ! NOT
          console.log(!true)
          console.log(!false)
  // Undefined
    // a variable value that has yet to be set
      undefined
      console.log(undefined)
  // Null
    // a mathematical and computer science concept that is not equal to anything, even itself
      null 
      console.log(null === null)
  // Symbol
    // Symbols are unique key identifiers 
      ":symbol"


// Variables in Javascript
 // containers for data
 // allow us to store data and give that data custom names
 // variables in javascript are always camelCased
  // whenTheFirstWordIsLowerCasedAndAllFollowingWordsAreUpperCasedWithNoSpaces

// variables have four parts
  // Variable Declaration 
    // var, let, const
  // Variable Name
    // myName
  // Assignment Operator 
    // =
  // Data
    // "Austin"

    var myName = "Austin"
    var myCohort = "Echo"
    var myYearAtLEARN = 2022

// Built-in Methods
console.log(myName.toUpperCase())
console.log(myName.charAt(1))
console.log(myName.indexOf('t'))
console.log(myName.includes("Aus"));


