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
};

test("Should render the CourseList component without crashing", () => {
  renderWithStore([
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ]);
});

test("Should render the CourseList component with 5 rows", () => {
  renderWithStore([
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ]);

  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(5);
});

test("Should render the CourseList component with 1 row when no courses", () => {
  renderWithStore([]);

  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(1);
});

test("Should render the CourseList component without crashing", () => {
  renderWithStore([
    { id: 0, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 4, name: "React", credit: 40 },
  ]);
});
test("Should render the CourseList component without crashing", () => {
  renderWithStore([
    { id: 5, name: "ES6", credit: 60 },
    { id: 7, name: "Webpack", credit: 20 },
    { id: 9, name: "React", credit: 40 },
  ]);
});

test("Should render the CourseList component without crashing", () => {
  renderWithStore([
    { id: 6, name: "ES6", credit: 60 },
    { id: 8, name: "Webpack", credit: 20 },
    { id: 10, name: "React", credit: 40 },
  ]);
});
