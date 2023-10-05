import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

test("is PageTitle render", () => {
    const { asFragment } = render(<PageTitle title="Hello" />)
    expect(asFragment()).toMatchSnapshot()
})