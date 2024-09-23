// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const body = document.body;
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append rows to the table for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
