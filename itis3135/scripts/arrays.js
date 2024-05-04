let persons = [];
let salaries = [];

function addSalary() {
    const nameInput = document.getElementById("name").value.trim();
    const salaryInput = document.getElementById("salary").value.trim();

    if (nameInput === "" || salaryInput === "" || isNaN(parseFloat(salaryInput))) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    persons.push(nameInput);
    salaries.push(parseFloat(salaryInput));

    document.getElementById("name").focus();
}

function modifySalary() {
    const dropdown = document.getElementById('employeeDropdown');
    const selectedIndex = dropdown.selectedIndex;
    const selectedEmployee = persons[selectedIndex];

    const newSalaryInput = document.getElementById('newSalary');
    const newSalary = parseFloat(newSalaryInput.value.trim());

    if (isNaN(newSalary)) {
        alert('Please enter a valid salary.');
        return;
    }

    const index = persons.indexOf(selectedEmployee);
    if (index !== -1) {
        salaries[index] = newSalary;
        alert(`Modified ${selectedEmployee}'s salary to $${newSalary}.`);
    } else {
        alert('Employee not found.');
    }

    newSalaryInput.value = '';

    document.getElementById("name").focus();
}

function displayResults() {
    const averageSalary = salaries.reduce((total, salary) => total + salary, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
    `;
}

function displaySalary() {
    const table = document.getElementById("results-table");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;
    for (let i = 0; i < persons.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${persons[i]}</td>
                <td>${salaries[i]}</td>
            </tr>
        `;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("name").focus();
});