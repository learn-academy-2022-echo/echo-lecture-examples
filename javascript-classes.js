// Javascript Classes Echo 8/10/22
// Classes are the blueprint for objects.

// Syntax to create a class
// class PascalCaseName {}

// Add properties to the class
// constructor method 
// properties or variables are added within the constructor method
// keyword this - specifies the current instance of the variable that belongs to the class
// this.variableName = value
// class MyCalculator {
//   constructor() {
//     this.num1 = 21,
//     this.num2 = 6,
//     this.num3 = 17
//   }
// }

// instantiate the class
// keyword new
// new ClassName

// console.log(new MyCalculator)
// // Output: MyCalculator { num1: 21, num2: 6, num3: 17 }

// const add = new MyCalculator
// console.log("add object:", add)
// Output: add object: MyCalculator { num1: 21, num2: 6, num3: 17 }

// Adding methods
// class MyCalculator {
//   // variables
//   constructor() {
//     this.num1 = 21,
//     this.num2 = 6,
//     this.num3 = 17
//   }
//   // methods
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const add = new MyCalculator
// console.log("add object:", add)
// console.log("add object with the method call:", add.addUp())
// Output:
// add object: MyCalculator { num1: 21, num2: 6, num3: 17 }
// add object with the method call: 44

// Make class dynamic
// class MyCalculator {
//   // variables
//   // place parameters in the constructor
//   constructor(num1, num2, num3) {
//     // change the values to match the appropriate parameter
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   // methods
//   addUp() {
//     return this.num1 + this.num2 + this.num3
//   }
// }

// const add = new MyCalculator(21, 6, 17)
// const math = new MyCalculator(13, 30, 7)
// // console.log("add object", add)
// // console.log("math object", math)
// // Output:
// // add object MyCalculator { num1: 21, num2: 6, num3: 17 }
// // math object MyCalculator { num1: 13, num2: 30, num3: 7 }

// console.log("add object with the method call:", add.addUp())
// // Output: add object with the method call: 44
// console.log("math object with the method call:", math.addUp())
// Output: math object with the method call: 50

// Mix and Match static and dynamic values
class MyCalculator {
  // variables
  // place dynamic parameters in the constructor
  constructor(num2, num3) {
    // change the values to match the appropriate parameter
    this.num1 = 21,
    this.num2 = num2,
    this.num3 = num3
  }
  // methods
  addUp() {
    return this.num1 + this.num2 + this.num3
  }

  largestNum() {
    return Math.max(this.num1, this.num2, this.num3)
  }
}

const add = new MyCalculator(78, 22)
console.log("add object:", add)
// Output: add object: MyCalculator { num1: 21, num2: 78, num3: 22 }
console.log("add object with the method call:", add.addUp())
// Output: add object with the method call: 121
console.log("Largest number in the add object ", add.largestNum())
// Output: Largest number in the add object  78