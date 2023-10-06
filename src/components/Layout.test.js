import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout tests", () => {
  it("is Layout mounted", () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("layout-wrapper")).toBeInTheDocument();
  });
});
