import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  test("h1 and p elements renders with correct text", () => {
    render(<Header />);
    const h1Element = screen.getByText("Weather Widget");
    const pElement = screen.getByText("Good", {exact: false});
    expect(h1Element).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
  });
});
