import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import App, { theme } from "../App";

describe("App component", () => {
  test("resets input and renders loader after clicking button", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputEl = screen.getByPlaceholderText("Enter Location");
    const buttonEl = screen.queryByRole("button");
    userEvent.type(inputEl, "london");
    userEvent.click(buttonEl);
    expect(inputEl.value).toBe("");
    const loaderEl = screen.getByText("Loading...");
    expect(loaderEl).toBeInTheDocument();
  });
  test("renders location and temperature elements if request succeeds", async () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputEl = screen.getByPlaceholderText("Enter Location");
    const buttonEl = screen.queryByRole("button");
    userEvent.type(inputEl, "london");
    userEvent.click(buttonEl);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    const locationEl = await screen.findByText(/^london$/i);
    expect(locationEl).toBeInTheDocument();
    const tempEls = await screen.findAllByText("°C", {exact: false});
    expect(tempEls).toHaveLength(4);
  });
});
