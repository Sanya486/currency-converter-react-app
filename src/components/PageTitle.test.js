import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

test("is PageTitle render", () => {
 render(<PageTitle title="Hello" />)
})