import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("PageTitle tests", () => {
    test("is PageTitle render", () => {
        render(<PageTitle title="Hello" />)
        expect(screen.getByRole('heading')).toHaveTextContent('Hello')
    })
})
