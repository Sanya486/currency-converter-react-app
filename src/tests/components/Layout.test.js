import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Layout from "../../components/Layout";

describe("Layout tests", () => {
  it("should Layout to be mounted", () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("layout-wrapper")).toBeInTheDocument();
  });
});
