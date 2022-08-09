// Javascript Testing with Jest Echo 8/9/22

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Setup
// - $ git checkout -b jest
// - $ mkdir javascript-foundations-jest
// - $ cd javascript-foundations-jest
// - $ cd ..
// - $ cd javascript-foundations-jest
// - $ touch javascript-jest.test.js
// - $ code .
// - $ yarn add jest

// Does your function work correctly? Consider the following items:
// Input
// Expected output
// Actual result you received

// TDD - Test Driven Development - the process of providing the inputs and comparing what was received against what was expected

// Red-Green Refactor Process
// RED
// 1: Write the test first!
// 2: Run your testing suite to see a failing test
// GREEN
// 3: Write the code
// 4: Run your testing suit to see your test pass
// REFACTOR
// 5: Refactor if necessary

// TEST STRUCTURE
// 1: Write the test first!
// describe method - takes two parameters a string that gives the name of the function and a call back function
describe("tea", () => {
  // the call back function of the describe contains the it method. the it method takes two arguments a string that describes what the test is doing and a call back function
  it("return a string that says Aloha, Echo22, take a sip of this tea", () => {
    // within the callback function of the it method we will have an expect statement
    // expect(functionCall()).jestmatcher(expected outcome)
    expect(tea()).toEqual("Aloha, Echo22, take a sip of this tea")
  })
})

// 2: Run your testing suite to see a failing test
// $ yarn jest

// Watch out for yargs helper text from vs code. Look for a similar error code:
// Cannot find module 'node:test' from 'javascript-jest.test.js'

// 1 | // Javascript Testing with Jest Echo 8/9/22
// 2 |
// > 3 | const { it } = require("node:test")
//   |                ^
// 4 | const { describe } = require("yargs")

// Correction: delete the yargs in your code or comment them out

// Good failure: because it failed on the expect statement that contains the function call. 
// FAIL  ./javascript-jest.test.js
// tea
//   ✕ return a string that says Aloha, Echo22, take a sip of this tea

// ● tea › return a string that says Aloha, Echo22, take a sip of this tea

// 3: Write the code
// PSEUDOCODE
// declare a function named tea
// input/parameter - none
// expected output/outcome - a string that says Aloha, Echo22, take a sip of this tea

const tea = () => {
  return "Aloha, Echo22, take a sip of this tea"
}

// 4: Run your testing suit to see your test pass
// Passing message
// PASS  ./javascript-jest.test.js
// tea
//   ✓ return a string that says Aloha, Echo22, take a sip of this tea (1 ms)

// 5: Refactor if necessary

// Write a test for a function that takes a string logs whether or not "That is good tea". If string is "yes", then expected output is "That is good tea". If string is "no", then expected output is "That is nasty tea"

describe("goodTea", () => {
  it("takes a string logs whether or not 'That is good tea'", () => {
    expect(goodTea("yes")).toEqual("That is good tea")
    expect(goodTea("no")).toEqual("That is nasty tea")
  })
})

// Good failure:
// goodTea
// ✕ takes a string logs whether or not 'That is good tea'

// ● goodTea › takes a string logs whether or not 'That is good tea'

// ReferenceError: goodTea is not defined

// Pseudocode
// declare a function named goodTea
// parameter is a string. will use "yes" or "no"
// expected outcome - a string that says "That is good tea" or "That is nasty tea"
// tools to consider: conditional statements with equality operators to evaluate the string

const goodTea = (string) => {
 if( string === "yes") {
  return "That is good tea"
 } else {
  return "That is nasty tea"
 }
}

// Passing message
// PASS  ./javascript-jest.test.js
// tea
//   ✓ return a string that says Aloha, Echo22, take a sip of this tea (1 ms)
// goodTea
//   ✓ takes a string logs whether or not 'That is good tea' (1 ms)
