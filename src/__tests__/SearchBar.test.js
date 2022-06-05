import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../App";
import SearchBar from "../components/SearchBar";

describe("SearchBar component", () => {
  test("changing value of input works correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    );
    const inputEl = screen.getByPlaceholderText("Enter Location");
    const buttonEl = screen.queryByRole("button");
    const searchImgEl = screen.getByAltText("search");
    expect(buttonEl).toContainElement(searchImgEl);
    expect(inputEl.value).toBe("");
    userEvent.type(inputEl, "london");
    expect(inputEl.value).toBe("london");
  });
});
