// JavaScript Objects 8/10/22

// Data Types
  // Primitive
    // String ""- a combination of characters, like a word, within quotation marks. Human language information 
    // Number 01- Represents quantity, mathematical operations, index identification
    // Boolean true - true or false data, boolean  + type coercion creates truthy and falsy values
    // Null null - Nothing
    // Undefined undefined- not yet assigned 
    // Symbol :symbol- unique identifier, mostly in objects

  // Composite Data Types
    // Array [] - container for a collection or list of data, arrays uses indexes, zero indexed
      // colors = ["blue", "green", "yellow", "red"] 
        // colors[0] --> "blue"
    // Object {} - uses key : value pairs to collect and hold data or methods (functions that belong ot objects)

  //CSS objects
  // h1 {
  // color: green
  //   }

  // Object can be both instruction, functionality, and description to our computer. 

    // Array --> object with index keys
    //   ["blue", "green", "yellow", "red"]
    //   (4)['blue', 'green', 'yellow', 'red']
    // 0: "blue"
    // 1: "green"
    // 2: "yellow"
    // 3: "red"

  // const pets = { elijah: "Bear-bear", samuel: "francesca", brook: "bruno", kelly: "kuma", cliff: "bo"}

// console.log(pets)
//{
// elijah: 'Bear-bear',
//   samuel: 'francesca',
//     brook: 'bruno',
//       kelly: 'kuma',
//         cliff: 'bo'
// }

// dot notation 
  // console.log(pets.kelly) --> kuma
  // console.log(pets.brook) --> bruno
  // console.log("", pets.kelly, pets.brook) --> kuma bruno

  const texasBBQ = {
    drink: "Texas Sweet Tea",
    appetizer: "Mac and Cheese",
    meal : {
      firstRound: [ "ribs", "pulled pork", "chicken", "Brisket"],
      secondRound: ["burger", "pulled chicken", "coleslaw"]
    },
    dessert: {
      iceCream: "Vanilla Ice cream",
      pie: "Apple Pie"
    }
  }

// console.log(texasBBQ) 

// Dot Notation - Super useful when we know our keys and can put them in our code
  // console.log(texasBBQ.appetizer) --> Mac and Cheese
  // console.log(texasBBQ.meal)
  // console.log(texasBBQ.meal.firstRound)
  // console.log(texasBBQ.meal.firstRound[2])



// Bracket Notation - useful when the key is changing or we are iterating through an objects keys
                  // cool tool to look into Object.keys
// console.log(texasBBQ["dessert"])


// Object Destructuring 
   // using this a LOT in react

const { pie, iceCream } = texasBBQ.dessert

// console.log(iceCream);
// console.log(pie);

// Objects are the intersection of Data and Behavior
  // functions that belong to objects are called methods
  // THIS refers to the object the code being referenced lives inside of
  // this.___ 
  const numberObj = {
    num1: 42,
    num2: 5,
    num3: 23,
    addUp: function() {
      return this.num1 + this.num2 + this.num3
    }
  }

  // console.log(numberObj.addUp);
  // console.log(numberObj.addUp());
  // console.log(numberObj.num1);


const pets = [ 
  { name: "Bear-bear", age:2 , type: "dog" }, 
  { name: "francesca", age: 8, type: "dog" }, 
  { name: "bruno", age: 3, type: "dog" }, 
  { name: "kuma", age: 2, type: "dog" },
  { name: "bo", age: 9, type: "dog" },
  { name: "simba", age: 9, type: "cat" }
]

// Pseudo Code: 
// make a function that iterates through an array of objects and returns the pets objects that are cats
  // function takes in an array as parameter
// use filter to return shorter array
  // return where type === "cat"

  // const onlyCats = (array) => {
  //   return array
  // }

  // const onlyCats = (array) => {
  //   return array.map(value => typeof value)
  // }

// const onlyCats = (array) => {
//   return array.filter(value => value.type === "cat")
// }

// const onlyCats = (array) => {
//   return array.filter(value => {
//     return value.type === "cat"
//   })
// }

  console.log(onlyCats(pets))