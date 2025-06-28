// Interface
// Web
// Structure of HTML
// Tree of objects
// Manipulate content, structure and style
//

// 1. Accessing elements through the DOM (get references to the elements)
const output = document.getElementById("output");
// console.log({ output });

console.log(output.innerHTML);

// 2. Manipulating the content
// Assignment: Find the differences in the following:
output.innerText = "Hello!";
output.innerHTML = "Hey There";
output.textContent = "This is using text content";

// 3. Manipulating the structure
const content = "<span>Our Content in here</span>";
output.innerHTML = content;

// 4. Manipulating the styles
// output.style = "color: red"; // This will set inline styles
output.classList.add("text-red");

// 5. Dealing with EVENTS
