import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { StyleSheetTestUtils } from "aphrodite";

// Empêcher Aphrodite d'injecter les styles pendant les tests
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const renderWithStore = (courses) => {
  const store = configureStore({
    reducer: {
      courses: () => courses,
    },
  });

  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
  return courses;
};

test("Should render the CourseList component without crashing", () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  console.log("TEST 1 - Courses:", courses);
  renderWithStore(courses);
});

test("Should render the CourseList component with 5 rows", () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  renderWithStore(courses);
  const rows = screen.getAllByRole("row");
  console.log("TEST 2 - Courses:", courses);
  console.log("TEST 2 - Rows found:", rows.length);
  expect(rows).toHaveLength(5);
});

test("Should render the CourseList component with 1 row when no courses", () => {
  const courses = [];
  renderWithStore(courses);
  const rows = screen.getAllByRole("row");
  console.log("TEST 3 - Courses:", courses);
  console.log("TEST 3 - Rows found:", rows.length);
  expect(rows).toHaveLength(1);
});

test("Should render with ids: 0, 2, 4", () => {
  const courses = [
    { id: 0, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 4, name: "React", credit: 40 },
  ];
  console.log("TEST 4 - Courses:", courses);
  renderWithStore(courses);
});

test("Should render with ids: 5, 7, 9", () => {
  const courses = [
    { id: 5, name: "ES6", credit: 60 },
    { id: 7, name: "Webpack", credit: 20 },
    { id: 9, name: "React", credit: 40 },
  ];
  console.log("TEST 5 - Courses:", courses);
  renderWithStore(courses);
});

test("Should render with ids: 6, 8, 10", () => {
  const courses = [
    { id: 6, name: "ES6", credit: 60 },
    { id: 8, name: "Webpack", credit: 20 },
    { id: 10, name: "React", credit: 40 },
  ];
  console.log("TEST 6 - Courses:", courses);
  renderWithStore(courses);
});
