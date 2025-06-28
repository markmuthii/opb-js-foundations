// Default order: top to bottom
console.log("1");
console.log("2");

function printThree() {
  console.log("3");
}

console.log("4");

printThree();
printThree();

// Something that sets the condition

// Reusable
// Block of Code
// Specific task

// Write a function printName(name) that takes name as an argument and prints the words "Hello name" where name is the value that is passed to the function.
// EG printName("Wick") // Hello Wick

// function printName(name) {
//   console.log("Hello " + name);
// }

// printName("Sasha");
// printName("Wick");

// Order in which code runs
// Decisions

// Storyline
// Path

// Write a function isEvenOrOdd(num) that takes a number num and returns "Even" if the number is even and "Odd" if the number is odd
// eg isEvenOrOdd(11) // "Odd"
// eg isEvenOrOdd(10) // "Even"

function isEvenOrOdd(num) {
  // Code to be executed

  // if the number is divisible by 2 WITHOUT A REMAINDER, then it is even
  // if there is a remainder, then the number is odd

  if (num % 2 === 0) {
    // even
    return "Even";
  } else {
    // odd
    return "Odd";
  }

  // console.log("hey ");
}

console.log("Even");

console.log(isEvenOrOdd(10)); // "Even"
console.log(isEvenOrOdd(11)); // "Odd"

// 1 + 1 // 2

// 4 / 2 // 2

// 4 % 2 // 0 // "2 remainder 0"

// 7 % 2 // 1 "3 remainder 1"

// 15 % 6 // 3

// console.log("2" == 2); // true
// console.log("2" === 2); // false
