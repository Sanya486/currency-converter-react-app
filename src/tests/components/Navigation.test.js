import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Navigation from "../../components/Navigation";

describe("Navigation tests", () => {
  it("should active status of Tabs changing after click", async () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    const exchageRateLink = screen.getByText(/Exchange rates/i);
    const converterLink = screen.getByText(/Currency converter/i);
    await userEvent.click(exchageRateLink);
    expect(exchageRateLink).toHaveClass("active");
    await userEvent.click(converterLink);
    expect(converterLink).toHaveClass("active");
  });
});
