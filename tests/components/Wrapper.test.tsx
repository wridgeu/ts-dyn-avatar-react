import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "../../src/components/Avatar";
import Wrapper from "../../src/components/Wrapper";

describe("Wrapper", () => {
  it("should render a caption and an image", () => {
    const url = "https://cataas.com/cat/says/hello%20world!";
    const alt = "@github-handle";
    const cap = "a beautiful cat";
    render(
      <Wrapper caption="a beautiful cat">
        <Avatar url={url} alt={alt} />
      </Wrapper>
    );
    const img = screen.getByAltText(alt);
    const caption = screen.getByText(cap);
    expect(img).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });
});
