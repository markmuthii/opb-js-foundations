// Declare a variable to store a student's name (string)
let student = "John Wick";

// Print the student's name in uppercase letters
console.log(student.toUpperCase());

// Arrays can store ordered collections of values
// Declare an array of student names
let students = ["Angela", "Winny", "Melody"];

// Access values in an array using their index (first element is at index 0)
let angela = students[0]; // First student
let winny = students[1]; // Second student
let melody = students[2]; // Third student

// Print each student's name
console.log(angela);
console.log(winny);
console.log(melody);

// Print the number of students in the array
console.log(students.length); // 3

// Declare an array of pet names
const pets = ["dog", "cat", "mouse", "horse"];

// Print the index of the last element in the pets array
console.log(pets.length - 1);

// Print the last pet in the array
console.log(pets[3]);

// Print the entire pets array
console.log(pets);

// Arrays in JS are not fixed in size; you can add more elements after creation
pets.push("chiwawa"); // Add a new pet to the array

// Print the updated pets array
console.log(pets);

// Arrays in JS can contain values of different types
const multiTypeArray = [
  "this is a string", // string
  7, // number
  true, // boolean
  null, // null
  undefined, // undefined
  ["yet another string"], // nested array
];
