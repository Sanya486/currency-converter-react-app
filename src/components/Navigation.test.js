import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import userEvent from "@testing-library/user-event";

describe("Navigation tests", () => {
  it("is active status of Tabs changing after click", async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    const exchageRateLink = screen.getByText(/Exchange rates/i);
    const converterLink = screen.getByText(/Currency converter/i);
    await userEvent.click(exchageRateLink);
    expect(exchageRateLink).toHaveClass("active");
    await userEvent.click(converterLink);
    expect(converterLink).toHaveClass("active");
  });
});
