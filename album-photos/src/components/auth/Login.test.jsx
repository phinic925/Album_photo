import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Login/>);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
  it("should not show any error message when the component is loaded", () => {
    render(<Login />);
    const alertElement = screen.queryByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });
});