// Create two student objects
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};
// Store students in an array
var studentsList = [student1, student2];
// Render a table using Vanilla JavaScript
var body = document.body;
var table = document.createElement('table');
var tbody = document.createElement('tbody');
// Append rows to the table for each student
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
body.appendChild(table);
//# sourceMappingURL=main.js.map