import { render, screen } from "@testing-library/react";

import PageTitle from "../../components/PageTitle";

describe("PageTitle tests", () => {
  test("should PageTitle to be mounted", () => {
    render(<PageTitle title="Hello" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Hello");
  });
});
