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

// Interface defining the structure of the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  // Function implementation that returns the formatted name
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  // Example usage
  console.log(printTeacher("John", "Doe"));  // Output: J. Doe

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

// Interface for the constructor of the class
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }

  // Interface to describe the class methods
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  // Implementation of the class StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(): string {
      return "Currently working";
    }

    displayName(): string {
      return this.firstName;
    }
  }

  // Example usage of the StudentClass
  const student = new StudentClass("Alice", "Johnson");
  console.log(student.displayName());  // Output: Alice
  console.log(student.workOnHomework());  // Output: Currently working
