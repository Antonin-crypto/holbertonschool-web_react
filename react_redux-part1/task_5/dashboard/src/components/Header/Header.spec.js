import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

// Empêche l'injection de styles Aphrodite dans les tests
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Mock du logo
jest.mock("../../assets/holberton-logo.jpg", () => "mocked-path.jpg");

// Fonction utilitaire pour rendre avec Redux
const renderWithRedux = (
  component,
  {
    preloadedState,
    store = configureStore({ reducer: { auth: authReducer }, preloadedState }),
  } = {}
) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Header Component", () => {
  test("Affiche les éléments de base du header (img et titre)", () => {
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: {
          isLoggedIn: false,
          user: null,
        },
      },
    });

    expect(screen.getByRole("img")).toHaveAttribute("src", "mocked-path.jpg");
    expect(screen.getByRole("heading")).toHaveTextContent("School Dashboard");
  });

  test("Ne rend pas le logoutSection quand user est déconnecté", () => {
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: {
          isLoggedIn: false,
          user: null,
        },
      },
    });

    expect(screen.queryByText(/logout/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("logoutSection")).not.toBeInTheDocument();
  });

  test("Affiche le logoutSection avec email quand user est connecté", () => {
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: {
          isLoggedIn: true,
          user: { email: "user@example.com" },
        },
      },
    });

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/user@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /logout/i })).toBeInTheDocument();
  });

  test("logoutSection est présent dans le DOM quand connecté", () => {
    const { container } = renderWithRedux(<Header />, {
      preloadedState: {
        auth: {
          isLoggedIn: true,
          user: { email: "user@example.com" },
        },
      },
    });

    const logoutSection = container.querySelector("#logoutSection");
    expect(logoutSection).toBeInTheDocument();
  });
});
