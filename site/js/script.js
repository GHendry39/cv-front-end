// Define the API endpoint.
const API_ENDPOINT =
  "https://ps15yzu930.execute-api.eu-west-2.amazonaws.com/dev/SaveVisitorCount";

// Get references to HTML elements
const counterEl = document.getElementById("counter");
const yearEl = document.getElementById("year");

//EventListener for window load event
document.addEventListener("DOMContentLoaded", handleLoad);

// Get the visitor count value
async function handleLoad() {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
  });
  const data = await response.json();
  const returnedData = data.result.browserCount;
  // Update the visitor count on the page
  counterEl.innerText = returnedData;
}

// Update year in footer
const date = new Date();
yearEl.innerText = date.getFullYear();
