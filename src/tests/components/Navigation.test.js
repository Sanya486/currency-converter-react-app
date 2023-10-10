import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Navigation from "../../components/Navigation";

describe("Navigation tests", () => {
  it("should add active status of Tabs on 'Exchange rates' after click", async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    const exchageRateLink = screen.getByText(/Exchange rates/i);
    await userEvent.click(exchageRateLink);
    expect(exchageRateLink).toHaveClass("active");
  });

  it("should add active status of Tabs on 'Currency converter' after click", async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    const converterLink = screen.getByText(/Currency converter/i);
    await userEvent.click(converterLink);
    expect(converterLink).toHaveClass("active");
  });
});
