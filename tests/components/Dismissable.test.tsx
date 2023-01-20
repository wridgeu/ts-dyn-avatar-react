import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Dismissible from "../../src/components/Dismissible";

describe("Dismissible", () => {
  beforeEach(() => {
    cleanup();
  });
  it("should render our component to the screen", () => {
    render(<Dismissible headline="Welcome to the new feed!" />);
    const component = screen.getByText("Welcome to the new feed!");
    expect(component).toBeInTheDocument();
  });
  it("should display a description", () => {
    render(
      <Dismissible headline="Welcome to the new feed!" description="someText" />
    );
    const component = screen.getByText("someText");
    expect(component).toBeInTheDocument();
  });
  it("should display a feedback link", () => {
    render(
      <Dismissible
        headline="Welcome to the new feed!"
        feedbackUrl="https://somelink.com/"
      />
    );
    const component = screen.getByText("Send feedback");
    expect(component).toBeInTheDocument();
  });
  it("should be dismissied", () => {
    render(<Dismissible headline="Welcome to the new feed!" />);
    const component = screen.getByText("×");
    fireEvent.click(component);
    expect(component).not.toBeInTheDocument();
  });
});
