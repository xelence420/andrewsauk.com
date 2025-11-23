// Run this code after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("click-me-button");
  const message = document.getElementById("message");
  const yearSpan = document.getElementById("year");

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Add click behavior
  button.addEventListener("click", () => {
    message.textContent = "You clicked the button! 🎉";
  });
});