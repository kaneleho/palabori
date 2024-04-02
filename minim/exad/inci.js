// Get the element
const element = document.getElementById('my-element');

// Define the click handler function with improved structure
const handleClick = event => {
  // Log the click event
  console.log('The element was clicked!');

  // Perform additional actions here if needed
};

// Attach the event handler to the element
element.addEventListener('click', handleClick);
