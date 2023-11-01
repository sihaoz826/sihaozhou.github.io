// Function to hide the element with the ID 'image-text' and show the element with the ID 'image-display'
function showImage() {
    document.getElementById('image-text').style.display = 'none';
    document.getElementById('image-display').style.display = 'block';
}

// Function to show the element with the ID 'image-text' and hide the element with the ID 'image-display'
function showText() {
    document.getElementById('image-text').style.display = 'block';
    document.getElementById('image-display').style.display = 'none';
}

// A flag to track the current state (whether the image is shown or not)
let isImageShown = false;

// Function to toggle between showing the image and the text
function toggleImageText() {
    // If the image is currently shown, show the text. Otherwise, show the image.
    if (isImageShown) {
        showText();
    } else {
        showImage();
    }
    // Toggle the flag to indicate the change in state
    isImageShown = !isImageShown;
}
