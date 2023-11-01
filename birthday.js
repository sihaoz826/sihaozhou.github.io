// Array of birthday messages
const messages = [
    "Happy Birthday! 🎂",
    "Wishing you all the best today! 🎉",
    "Another year older, another year wiser. 🦉",
    "Celebrate and enjoy your special day! 🎈",
    "May your year be filled with happiness! 😊"
];

// Function to generate a random integer from 0 up to (but not including) the given maximum
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to change the content of an element with the ID 'birthday-message' to a random birthday message from the array
function changeBirthdayMessage() {
    const randomMessage = messages[getRandomInt(messages.length)];
    document.getElementById('birthday-message').textContent = randomMessage;
}

// Function to change the background color of an element with the ID 'birthday-card' to a random RGB color
function changeBackgroundColor() {
    const randomColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
    document.getElementById('birthday-card').style.backgroundColor = randomColor;
}

// Function to update both the message and background color of the birthday card
function updateBirthdayCard() {
    changeBirthdayMessage();
    changeBackgroundColor();
}

// Set an interval to automatically update the birthday card every 5 seconds (5000 milliseconds)
setInterval(updateBirthdayCard, 2000);
