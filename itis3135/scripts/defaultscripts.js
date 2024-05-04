// Function to display current date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ampm;
    dateTimeElement.textContent = 'Today is ' + timeString + ' on ' + dayOfWeek + ', ' + date + ' ' + month + ', ' + year;
}
 
displayDateTime();

// Function to submit form and display greeting
function submitForm() {
    const name = document.getElementById('name').value;
    const feeling = document.getElementById('feeling').value;
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Kaleidoscopic Lion welcomes you, ' + name + '! We\'re glad you are feeling ' + feeling + '!';
}

// Function to show favorite polygon based on user input
function showFavoritePolygon() {
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById('favoriteNumber').value)));
    const polygons = ['Monogon', 'Digon', 'Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];
    const favoritePolygon = polygons[favoriteNumber];
    alert('Your favorite polygon with ' + favoriteNumber + ' sides is a ' + favoritePolygon + '.');
}

// Function One: Calculate the sum of numbers from 1 to 10
function addFirstTen() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    alert('The sum of numbers from 1 to 10 is ' + sum + '.');
}

// Function Two: Suggest adopting a random animal
function petAdoption() {
    const animals = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit'];
    const randomIndex = Math.floor(Math.random() * animals.length);
    alert('Your animal brand company suggests adopting a ' + animals[randomIndex] + '.');
}

// Function Three: Calculate factorial of a random number between 1 and 10
function factorialOfRandomTen() {
    let factorial = 1;
    const num = Math.floor(Math.random() * 10) + 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert('The factorial of ' + num + ' is ' + factorial + '.');
}

// Function Four: Change background color to a random color
function backgroundColorChange() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];
    document.body.style.backgroundColor = color;
    alert('The background color of the page is now ' + color + '.');
}