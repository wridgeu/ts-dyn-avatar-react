import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  it("should render the title", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
