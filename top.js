// Get the button element with the ID "topBtn"
const topButton = document.getElementById("topBtn");

// Add an event listener to the window for the "scroll" event
window.addEventListener("scroll", function() {
    // Check if the scrolled position is greater than half of the window's height
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        topButton.style.display = "block";  // If so, show the button
    } else {
        topButton.style.display = "none";  // Otherwise, hide the button
    }
});

// Define a function to scroll the page to the top
function scrollToTop() {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For other browsers like Chrome, Firefox, IE,
}