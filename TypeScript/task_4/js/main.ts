const cppTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
const reactTeacher: Subjects.Teacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingReact: 5 };
const javaTeacher: Subjects.Teacher = { firstName: 'Alex', lastName: 'Brown', experienceTeachingJava: 2 };

const cpp = new Subjects.Cpp();
cpp.setTeacher(cppTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(reactTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(javaTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
