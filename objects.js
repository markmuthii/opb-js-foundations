// Object literal
const student2 = {
  firstName: "Jane",
  lastName: "Wick",
  age: 77,
  course: "Web Dev Essentials",
  balance: 1000,
  move: function () {
    return this.firstName + " is walking.";
  },
};

const student3 = {
  firstName: "Melody",
  lastName: "Njuki",
  age: 20,
  course: "Web Dev Essentials",
  balance: 0,
  move: function () {
    return this.firstName + " is walking.";
  },
};

const student4 = {
  firstName: "Winny",
  lastName: "Ouma",
  age: 22,
  course: "Web Dev Essentials",
  balance: 0,
  move: function () {
    return this.firstName + " is walking.";
  },
};

// console.log(age);

// Dot notation for access
// Properties
console.log(student2.age);
console.log(student3.age);
console.log(student4.age);
console.log(student2.course);

// Methods
console.log(student2.move());
console.log(student3.move());
console.log(student4.move());

// Square bracket notation for access
// Properties
console.log(student2["age"]);
console.log(student3["age"]);
console.log(student4["age"]);
console.log(student2["course"]);

// Methods
console.log(student2["move"]());
console.log(student3["move"]());
console.log(student4["move"]());

// Simulate a user selecting the property that they want to view for student2
const selectedOption = "age";

console.log(student2[selectedOption]);

// We delete the age property from the object
delete student2.age;

// This is going to log undefined because the age property no londer exists in the student2 object
console.log(student2[selectedOption]);
