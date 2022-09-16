// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Jest template
// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multiplyByThree", () => {
  it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

// ReferenceError: multiplyByThree is not defined

// b) Create the function that makes the test pass.
// Psuedocode:
// Declare a function called multiplyByThree that takes in an array
  // One parameter - array
  // Iterate over array using map
  // Multiply currentValue by 3
// Return result

// const multiplyByThree = (array) => {
//   return array1.map(value => value * 3)
// }

// ReferenceError: array1 is not defined
// I have searched for these things...and here is what I have found and my process to solve.

const multiplyByThree = (array) => {
  return array.map(value => value * 3)
}

// Test Suites: 1 passed, 1 total
// Looks like I had an extra one on my array...OOPS!!


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
