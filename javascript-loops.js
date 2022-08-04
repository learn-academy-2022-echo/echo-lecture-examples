// Javascript loops Echo 8/4/22

// Iteration: repeating a process for a specified number of times
// for loops: a tool for iteration in javascript

// Anatomy of for loop
// for(){}
// for(starting point; stopping point; what direction to travel){action to take}

// var myArr = [2, 4, 6]
// index     0  1  2
// length    1  2  3

// long hand way to write out condition on for loop
// for(let index = 0; index < 3; index = index + 1)

// short hand method
// change index to i, use the increment operator ++
// for(let i = 0; i < 3; i++)

// var myArr = [2, 4, 6]

// for(let i = 0; i < 2; i++){
//   console.log(myArr[i] * 5)
// }
// Output: 10
      //  20 

// Creating logic in the loop
// conditional statements
// var numsArray = [9, 5, 13, 4, 7, 21, 12, 33]

// for(let i = 0; i < numsArray.length; i++){
//   if(numsArray[i] % 2 !== 0){
//     console.log("This number is odd")
//   } else {
//     console.log("This number is even")
//   }
// }

// for(let i = 0; i < numsArray.length; i++){
//   if(numsArray[i] % 2 !== 0){
//     console.log("This number is odd")
//   } else if (numsArray[i] % 2 === 0) {
//     console.log("This number is even")
//   }
// }

// var numsArray = [9, 5, 13, 4, 7, 21, 12, 33]

// for(let i = 0; i < numsArray.length; i++){
//     console.log(numsArray[i] % 2)
//   }

//   console.log(9/2)
//   console.log(4/2)

var numsArray = [9, 5, 13, 4, 7, 21, 12, 33, -7]
// string interpolation `${variableName}`
for(let i = 0; i < numsArray.length; i++){
  if(numsArray[i] % 2 !== 0){
    console.log(`${numsArray[i]} This number is odd`)
  } else if (numsArray[i] % 2 === 0) {
    console.log(`${numsArray[i]} This number is even`)
  }
}

// Output:
// 9 This number is odd
// 5 This number is odd
// 13 This number is odd
// 4 This number is even
// 7 This number is odd
// 21 This number is odd
// 12 This number is even
// 33 This number is odd
// -7 This number is odd

