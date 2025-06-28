function loadNavigation() {
  // Array of navigation link objects, each with an href and display text
  const navLinks = [
    {
      href: "index.html",
      text: "Home",
    },
    {
      href: "about.html",
      text: "About",
    },
    {
      href: "#",
      text: "Services",
    },
    {
      href: "contact.html",
      text: "Contact",
    },
  ];

  // Get the element where navigation links will be inserted
  const navLinksElement = document.getElementById("nav-links");

  // Initialize an empty string to hold the list items
  let listItems = "";

  // Loop through the navLinks array to get each nav link object and build the list items
  for (let i = 0; i <= navLinks.length - 1; i++) {
    // Get each nav link element from the array
    const listItem = navLinks[i];

    // Create a list item with a link and add it to the listItems string
    listItems += `<li><a href="${listItem.href}">${listItem.text}</a></li>`; // String interpolation
  }

  // Insert the generated list items into the navLinksElement
  navLinksElement.innerHTML = listItems;
}

window.addEventListener("DOMContentLoaded", loadNavigation);
