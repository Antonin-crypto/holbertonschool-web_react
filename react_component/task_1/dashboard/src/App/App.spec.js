import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./Login";
import CourseList from "./CourseList";

describe("App component", () => {
  test("renders Header component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders Login component", () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(<App />);
    const footerText = screen.getByText(/copyright/i);
    expect(footerText).toBeInTheDocument();
  });
});

describe("App", () => {
  it("renders Login when isLoggedIn is false", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Login/i)).toBeInTheDocument();
  });

  it("renders CourseList when isLoggedIn is true", () => {
    const { getByText } = render(<App />);
    // Simule un login
    const loginButton = getByText(/Login/i);
    loginButton.click();
    expect(getByText(/Available courses/i)).toBeInTheDocument();
  });
});

describe("App Component - Keyboard events", () => {
  let logOutMock;
  let alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls logOut when ctrl + h is pressed", () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  it('shows alert with "Logging you out" when ctrl + h is pressed', () => {
    shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
  });
});
