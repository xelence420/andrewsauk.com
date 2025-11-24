// Run this code after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("click-me-button");
  const message = document.getElementById("message");
  const yearSpan = document.getElementById("year");

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Start with the message hidden
  message.style.display = "none";

  // Toggle the message on each click
  button.addEventListener("click", () => {
    if (message.style.display === "none") {
      // Show the message
      message.textContent = "You clicked the button! 🎉";
      message.style.display = "block"; // p tags are block elements by default
    } else {
      // Hide the message
      message.style.display = "none";
    }
  });
});
