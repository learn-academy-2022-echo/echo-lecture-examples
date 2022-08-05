// JavaScript Functions 8/5/2022

// Functions give a dev control over when the code executes
// Functions are reusable

// Encapsulation - creating predicability in your code by ensuring your code doesn't rely on external data


// Anatomy of a function
// - variable declaration
// - name - camelCase, communicate intent
// - single equal sign
// - parentheses - indicate action
// - arrow - function syntax
// - return keyword in JavaScript, indicates the output of a function

// Basic function:
// const makeCoffee = () => {
//   return "enjoy your coffee"
// }

// invoke the function

// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())
// console.log(makeCoffee())



// parameter - special variable that belongs to a function
// only way into a function

// const makeCoffee = (coffeeType) => {
//   return `enjoy your ${coffeeType}`
// }

// console.log(makeCoffee())
// -> enjoy your undefined

// argument - assigning a value to the parameter
// console.log(makeCoffee("latte"))
// -> enjoy your latte
// console.log(makeCoffee("coffee"))
// console.log(makeCoffee("mocha"))
// console.log(makeCoffee("espresso"))


// Pseudo coding - process of writing out your plan in regular words

// Prompt: create a function that determine the price of the coffee based on the size and return coffee order with name and price

// create a function, parameters - coffeeType, coffeeSize
// make a decision about the size that will determine the price
//   if statements looking at the sizes of coffee
//   return the name and price

const makeCoffee = (coffeeType, coffeeSize) => {
  if(coffeeSize === "small") {
    return `Your ${coffeeType} is $3`
  } else if(coffeeSize === "medium") {
    return `Your ${coffeeType} is $4`
  } else if(coffeeSize === "large") {
    return `Your ${coffeeType} is $5`
  }
}

console.log(makeCoffee("Kona blend", "small"))

// If you get undefined from a function look for the return

console.log(makeCoffee("Mocha", "medium"))
console.log(makeCoffee("Dirt", "large"))
