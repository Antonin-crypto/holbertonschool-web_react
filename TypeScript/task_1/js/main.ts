// Existing Teacher interface
interface Teacher {
    firstName: string; // Can only be set during initialization
    lastName: string;  // Can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Allows additional attributes with any type
}

// Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number; // Required attribute
}

// Example of creating a Directors object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Function to log director info
function logDirectorInfo(director: Directors): void {
    console.log(director);
}

// Call the function to log info
logDirectorInfo(director1);

