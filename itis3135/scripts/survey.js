// Function to prevent form submission without necessary information
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const courseInputs = document.querySelectorAll('.course-input');
    let isValid = true;
    for (let i = 0; i < courseInputs.length; i++) {
        if (courseInputs[i].value.trim() === '') {
            isValid = false;
            courseInputs[i].classList.add('error');
        } else {
            courseInputs[i].classList.remove('error');
        }
    }
    if (isValid) {
        submitForm();
    } else {
        alert('Please fill in all the necessary information.');
    }
}

// Function to reset the progress of the form
function resetForm() {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = ''; // Clear course inputs
}

// Function to add new course text boxes
function addCourseTextBox() {
    const courseContainer = document.getElementById('course-container');
    const newCourseInput = document.createElement('input');
    newCourseInput.setAttribute('type', 'text');
    newCourseInput.classList.add('course-input');
    courseContainer.appendChild(newCourseInput);
}

// Function to add a delete button beside each new course text box
function addDeleteButton() {
    const courseInputs = document.querySelectorAll('.course-input');
    for (let i = 0; i < courseInputs.length; i++) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            courseInputs[i].remove(); // Remove course input
            deleteButton.remove(); // Remove delete button
        });
        courseInputs[i].parentNode.appendChild(deleteButton);
    }
}

// Function to gather data from the form and add content in place of the form on submit
function submitForm() {
    const courseInputs = document.querySelectorAll('.course-input');
    const courses = [];
    for (let i = 0; i < courseInputs.length; i++) {
        courses.push(courseInputs[i].value);
    }
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; // Clear previous result
    const resultHeader = document.createElement('h2');
    resultHeader.textContent = 'Submitted Courses';
    resultContainer.appendChild(resultHeader);
    const resultList = document.createElement('ul');
    for (let i = 0; i < courses.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = courses[i];
        resultList.appendChild(listItem);
    }
    resultContainer.appendChild(resultList);
}

// Event listener for form submission
const form = document.getElementById('survey-form');
form.addEventListener('submit', validateForm);

// Event listener for reset link
const resetLink = document.getElementById('reset-link');
resetLink.addEventListener('click', resetForm);

// Event listener for adding new course text boxes
const addCourseButton = document.getElementById('add-course-button');
addCourseButton.addEventListener('click', function() {
    addCourseTextBox();
    addDeleteButton();
});

//loads image
function loadImage() {
    let image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image);
    let text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;
}
// Function to gather data from the form and add content in place of the form on submit
function submitForm() {
    const courseInputs = document.querySelectorAll('.course-input');
    const courses = [];
    for (let i = 0; i < courseInputs.length; i++) {
        courses.push(courseInputs[i].value);
    }

    // Create a string with the submitted data
    let popupContent = "<h2>Submitted Courses</h2><ul>";
    for (let i = 0; i < courses.length; i++) {
        popupContent += "<li>" + courses[i] + "</li>";
    }
    popupContent += "</ul>";

    // Display popup with the submitted data
    alert(popupContent);
}
