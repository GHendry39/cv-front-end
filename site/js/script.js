// let visitorCount = +localStorage.getItem("visitors");
// localStorage.setItem("visitors", (visitorCount += 1));

// // Update visitor counter
// const counterEl = document.getElementById("counter");
// counterEl.innerText = visitorCount;

// Define the API endpoint.
const API_ENDPOINT =
  "https://ps15yzu930.execute-api.eu-west-2.amazonaws.com/dev/SaveVisitorCount";

// Get references to our HTML element
const counterEl = document.getElementById("counter");

//EventListener for window load event
document.addEventListener("DOMContentLoaded", handleLoad);

async function handleLoad() {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
  });
  const data = await response.json();
  const returnedData = data.result.browserCount;
  // Update the visitor count on the page
  counterEl.innerText = returnedData;
}
