// DirectorInterface definition
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }

  // TeacherInterface definition
  interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
  }

  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}

	getCoffeeBreak(): string {
	  return "Getting a coffee break";
	}

	workDirectorTasks(): string {
	  return "Getting to director tasks";
	}
  }

  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}

	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}

	workTeacherTasks(): string {
	  return "Getting to work";
	}
  }

  // Function that returns either a Director or Teacher instance
  function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
	  return new Teacher();
	} else {
	  return new Director();
	}
  }

  // Type predicate to check if employee is a Director
  function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
  }

  // Function to execute the appropriate work based on employee type
  function executeWork(employee: Director | Teacher): void {
	if (isDirector(employee)) {
	  console.log(employee.workDirectorTasks());
	} else {
	  console.log(employee.workTeacherTasks());
	}
  }

  // Define a string literal type for Subjects
type Subjects = 'Math' | 'History';

// Function that returns the appropriate teaching message based on the class subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}


  // Example usage
  executeWork(createEmployee(200));  // Output: Getting to work
  executeWork(createEmployee(1000)); // Output: Getting to director tasks
  console.log(teachClass('Math'));    // Output: Teaching Math
  console.log(teachClass('History')); // Output: Teaching History
