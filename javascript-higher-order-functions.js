// JavaScript Higher Order Functions 8/8/22


const myFunction = () => {}


// For Each // .forEach()
  // dot notation, camleCase, parens
  // takes an argument of a function ()=>{}
  // ( paramters ) => { code }
  // Foreach requires an array to work on
  // forEach iterates THE SAME NUMBER OF TIMES AS the items in the array
  let echoArray = ["Cody", "Vanessa", "Tuan", "Daniel"]

  // echoArray.forEach()
// echoArray.forEach((string) => {
//   console.log(`${string} showed us something cool`)
//  })

// forEach has built in parameters that it expects
  // echoArray.forEach((value) => {
  //   console.log(`${value} showed us something cool`)
  // })
    // Output:
    // Cody showed us something cool
    // Vanessa showed us something cool
    // Tuan showed us something cool
    // Daniel showed us something cool

  let numbers = [1,2,3,4,5,6,7]

  // numbers.forEach((value) => {
  //   value ** 5
  // })
  // Output: _n_o_t_h_i_n_g_

  // numbers.forEach((value)=>{
  //   console.log(value ** 5)
  // })

  // Output: 
    // 1
    // 32
    // 243
    // 1024
    // 3125
    // 7776
    // 16807


// forEach can take other Parameters in a Particular Order
  // These parameters live inside of the higher order functions parens
      // .forEach((value, index, array)=>{})
      // .map((value, index, array)=>{})
      // .filter((value, index, array)=>{})

    // value
      const myDrinkArray = ["Red Bull", "Tang", "Coffee", "Sprite", "Beer"]

      // myDrinkArray.forEach((value)=>{
      //   console.log("drinks from myDrinkArray", value);
      // })
      //Output:
        // drinks from myDrinkArray Red Bull
        // drinks from myDrinkArray Tang
        // drinks from myDrinkArray Coffee
        // drinks from myDrinkArray Sprite
        // drinks from myDrinkArray Beer

      // myDrinkArray.forEach((banana) => {
      //   console.log("drinks from myDrinkArray", banana)
      // })

      // myDrinkArray.forEach((drinks) => {
      //   console.log("drinks from myDrinkArray", drinks)
      // })
      // Output:
        // drinks from myDrinkArray Red Bull
        // drinks from myDrinkArray Tang
        // drinks from myDrinkArray Coffee
        // drinks from myDrinkArray Sprite
        // drinks from myDrinkArray Beer

// Index
      // myDrinkArray.forEach((drinks, index)=>{
      //   console.log("drinks from myDrinkArray", drinks)
      //   console.log("index from myDrinkArray", index)
      // })
      // output:
        // drinks from myDrinkArray Red Bull
        // index from myDrinkArray 0
        // drinks from myDrinkArray Tang
        // index from myDrinkArray 1
        // drinks from myDrinkArray Coffee
        // index from myDrinkArray 2
        // drinks from myDrinkArray Sprite
        // index from myDrinkArray 3
        // drinks from myDrinkArray Beer
        // index from myDrinkArray 4

      // will not work as intended
      // myDrinkArray.forEach((index) => {
      //   console.log("index from myDrinkArray", index)
      // })

// Array
      // myDrinkArray.forEach((drinks, index, array)=>{
      //   console.log("drinks from myDrinkArray", drinks)
      //   console.log("index from myDrinkArray", index)
      //   console.log("array from myDrinkArray", array);
      // })
      // output: 
        // drinks from myDrinkArray Red Bull
        // index from myDrinkArray 0
        // array from myDrinkArray['Red Bull', 'Tang', 'Coffee', 'Sprite', 'Beer']
        // drinks from myDrinkArray Tang
        // index from myDrinkArray 1
        // array from myDrinkArray['Red Bull', 'Tang', 'Coffee', 'Sprite', 'Beer']
        // drinks from myDrinkArray Coffee
        // index from myDrinkArray 2
        // array from myDrinkArray['Red Bull', 'Tang', 'Coffee', 'Sprite', 'Beer']
        // drinks from myDrinkArray Sprite
        // index from myDrinkArray 3
        // array from myDrinkArray['Red Bull', 'Tang', 'Coffee', 'Sprite', 'Beer']
        // drinks from myDrinkArray Beer
        // index from myDrinkArray 4
        // array from myDrinkArray['Red Bull', 'Tang', 'Coffee', 'Sprite', 'Beer']


// Map
      // Map iterates over an array and gives us back a new array
      // Map (tries) to return to us an array of the same length of the original array
      
    // const multThree = [3,6,9].map((value)=>{
    //   return value * 3
    // })

    // console.log("multThree:", multThree) 
    //Output: 
      // multThree: [9, 18, 27]

    const numArray = [42, 200, 1234]

    // const multThree = numArray.map((value) => {
    //   return value * 3
    // })

    // console.log("multThree:", multThree) 
    // output:
      // multThree: [ 126, 600, 3702 ]

    
    const myNumbers = [4, 5, 6, 7, -9]

    // I need an array that maps over myNumbers and returns a new array that has the values of "even" if the value was even, "odd" if the value was odd, and "not a number" if the value was NaN
    
    const evenOrOdd = myNumbers.map((value)=>{
      if(value % 2 !== 0) {
        return "odd"
      } else if(value % 2 === 0){
        return "even"
      } else {
        return "Not a Number"
      }
    })

    // console.log("even or odd flag:", evenOrOdd);
    // output: even or odd flag: [ 'even', 'odd', 'even', 'odd', 'odd' ]


    // SYNTACTICAL SUGAR
      // full syntax
    // let multThree = numArray.map((value) =>{
    //   return value * 3
    // })

    //   console.log("multThree:", multThree)

    // no code block syntax
    // let multThree = numArray.map((value) => value * 3)
    //   console.log("multThree:", multThree)

    // no parens syntax
    // let multThree = numArray.map(value => value * 3)
    //   console.log("multThree:", multThree)


// Filter
    // Filter iterates over an array and gives us back a new array
    // Filter tries to return to us an array SHORTER than the original array
    // Filter has a built in conditional statement
      // filter will only return a value when a condition is true


// let myArrayOfStuff = [6, 4, 5, true, false, 1000, "hello", "yo", null, 5]
 // filter through array and return only odd numbers

    //filter through array and only return numbers in a new array
  // let numberStuff = myArrayOfStuff.filter((notebook)=>{
  //   return typeof notebook === "number"
  // })

  // console.log(myArrayOfStuff)
    //output
  // [
  //   6, 4,
  //   5, true,
  //   false, 1000,
  //   'hello', 'yo',
  //   null, 5
  // ]

// console.log("numberStuff:", numberStuff)
// output: numberStuff: [ 6, 4, 5, 1000, 5 ]

// let oddStuff = numberStuff.filter((value)=>{
//   return value % 2 !== 0
// })

// console.log("oddStuff:", oddStuff);
// oddStuff: [5, 5]

// let numberStuff2 = myArrayOfStuff.filter((notebook) => {
//   return typeof notebook === "number" && notebook % 2 !== 0
// })

// console.log("numberStuff2:", numberStuff2)

// _________________________________________

// need a function that takes in an array of numbers and returns only numbers that are less than 100 but odd numbers are replaced with the word "odd"

  // const numberFunction = (array) => {
  //   return array
  // }

//output; [
// 1231, 345634,
//   8, 1,
//   141, 231,
//   45
// ]


// const numberFunction = (array) => {
//   let underOneHundred = array.filter(value => value < 100)
//   return underOneHundred
// }
//output: [ 8, 1, 45 ]

const numberFunction = (array) => {
  let underOneHundred = array.filter(value => value < 100)
  let numbersMapped = underOneHundred.map(value => {
    if(value % 2 !== 0) {
      return "odd"
    } else {
      return value
    }
  })
  return numbersMapped
}

console.log(numberFunction([1231, 345634, 8, 1, 141, 231, 45]))

//output: [ 8, 'odd', 'odd' ]