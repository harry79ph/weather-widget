import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import App, { theme } from "../App";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";

const mockData = {
  weather: [
    {
      id: 520,
      main: "Rain",
      description: "light intensity shower rain",
      icon: "09n",
    },
  ],
  main: {
    temp: 286.57,
    feels_like: 286.4,
    temp_min: 285.01,
    temp_max: 287.49,
    pressure: 1016,
    humidity: 93,
  },
  wind: { speed: 2.57, deg: 230 },
  clouds: { all: 75 },
  name: "London"
};

const weatherResponse = rest.get("https://api.openweathermap.org/data/2.5/weather", (req, res, ctx) => {
  if (req.url.searchParams.get('q') === "london") {
    return res(ctx.json(mockData));
  } else {
    return res(ctx.status(500));
  }
});

const server = setupServer(weatherResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App component", () => {
    test("resets input and renders loader after clicking button", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputEl: HTMLInputElement = screen.getByPlaceholderText("Enter Location");
    const buttonEl: HTMLButtonElement = screen.getByRole("button");
    const searchImgEl = screen.getByAltText("search");
    expect(buttonEl).toContainElement(searchImgEl);
    expect(inputEl.value).toBe("");
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
    const buttonEl: HTMLButtonElement = screen.getByRole("button");
    userEvent.type(inputEl, "london");
    userEvent.click(buttonEl);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    const mainEl = await screen.findByText("Rain");
    expect(mainEl).toBeInTheDocument();
  });
  test("renders 'Location could not be found' when an invalid location typed in the search box", async () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputEl = screen.getByPlaceholderText("Enter Location");
    const buttonEl: HTMLButtonElement = screen.getByRole("button");
    userEvent.type(inputEl, "notacity");
    userEvent.click(buttonEl);
    await waitFor(() => {
      expect(screen.getByText("Location could not be found")).toBeInTheDocument();
    });
  });
});