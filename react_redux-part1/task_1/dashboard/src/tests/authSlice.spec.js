// src/features/auth/authSlice.test.js
import authReducer, { login, logout } from "../features/auth/authSlice";

describe("authSlice", () => {
  const initialState = {
    user: {
      email: "",
      password: "",
    },
    isLoggedIn: false,
  };

  it("should return the initial state by default", () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should handle login action correctly", () => {
    const actionPayload = {
      email: "test@example.com",
      password: "password123",
    };

    const state = authReducer(initialState, login(actionPayload));

    expect(state.user.email).toBe(actionPayload.email);
    expect(state.user.password).toBe(actionPayload.password);
    expect(state.isLoggedIn).toBe(true);
  });

  it("should handle logout action correctly", () => {
    const loggedInState = {
      user: {
        email: "user@example.com",
        password: "securepass",
      },
      isLoggedIn: true,
    };

    const state = authReducer(loggedInState, logout());

    expect(state).toEqual(initialState);
  });
});
