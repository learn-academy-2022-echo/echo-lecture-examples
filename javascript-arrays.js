// JavaScript Arrays 8/4/22

// ARRAYS
  // A composite Data Type 
  // Data organized in a container with numbers associated with the data values
  // Arrays have Values
    // Value IS the Data at an index in an Array. 
  // Arrays have Indexes
    // Arrays are zero indexed
      // 0,1,2,3
    // Location / Address of data in the Array
  // Array Syntax in Javascript, Array notation, Index notation
    // [] Square Brackets
    // values are separated by commas


// // Array as a variable 
//   var months = ["January", "February", "March"]
//   console.log(months)

// // Arrays are Zero indexed
//   //                  0        1        2       3
//   var streetNames = ["ash", "beech", "cedar", "elm"]
//   //              value[0]  value[1]  value[2]...

//   console.log(streetNames[2])
//   console.log(streetNames[3])

// // Arrays can reassign the values using index notation
//   // streetNames = "Cherry"
//   streetNames[0] = "Cherry"

//   console.log(streetNames)

// // Arrays have the length property
//   console.log(streetNames.length)


  // ____________________________
// Array Built-In Methods

// MUTATORS
  // they change the original array

// var echo = ["Samuel", "Cody", "Tuan", "Kelly", "Francisco"]

// // .push()
//   // Adds a new value to the end of the array
//   console.log(echo)
//   echo.push("Cathrine")
//   console.log(echo)

// // .pop()
//   // Removes the last value of the array
//   // does not take an argument
//   // echo.pop()
//   // echo.pop()
//   // echo.pop()
//   console.log(echo)

// //.reverse()
//   // I wanna flip the array around backwards
//   echo.reverse()
//   console.log(echo)

// // .sort()
//   // that sort sorts things according to their character value
//   echo.sort()
//   // echo.reverse()
//   console.log(echo)

//   var numbers = [123, 543, 322, 2, 42 ]
//   numbers.sort() 
//   // sorts according to the first value
//   console.log(numbers)

//   numbers.sort((a, b) => a - b)
//   console.log(numbers)


// ACCESSORS 
  // they do NOT change the original array but will give you new array with new values

  // .indexOf()
    // returns to us the index of the FIRST item that matches in the array
    // If nothing matches it returns -1
  //   var kellyIndex = echo.indexOf("Kelly")
  //   console.log(kellyIndex)
 
  // // .slice()
  //   console.log(echo);
  //   console.log(echo.slice(2,3));
  //   var echoSubSet = echo.slice(2, 5)
  //   console.log(echoSubSet)

  // .concat()


// Array and turn it into a string
  // .join()
    // var joinedEcho = echo.join()
      // Cathrine, Cody, Francisco, Kelly, Samuel, Tuan
    // var joinedEcho = echo.join("")
      //CathrineCodyFranciscoKellySamuelTuan
    // var joinedEcho = echo.join(" ")
    // Cathrine Cody Francisco Kelly Samuel Tuan
    // var joinedEcho = echo.join(", ")
    // console.log(joinedEcho)

// Turn a String into an Array
  // .split()
  // var song = "Somebody once told me the world is gonna roll me"

  // // var songSplit = song.split()
  // // var songSplit = song.split("")
  // var songSplit = song.split(" ")

  // console.log(songSplit)


// Array Destructuring 

var [firstName, lastName] = ["Bruce", "Wayne"]

console.log(firstName);
console.log(lastName);
