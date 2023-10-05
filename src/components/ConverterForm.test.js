import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ConverterForm from "./ConverterForm";
import { reducer } from "redux/currencyConverter";

describe("Converter Form testing", () => {
  let store;
  beforeAll(() => {
    store = createStore(reducer, {
      currency: "",
      currencyList: [
        ["AAA", "dsdadsa"],
        ["bbbb", "bbbbbb"],
      ],
    });
  });
  it("is List of currencies exist in options", async () => {
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    const optionArray = await screen.findAllByTestId("option");
    optionArray.map((option) => expect(option).toBeInTheDocument());
  });
  it("is 'Please choose your currency...' visible", () => {
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    
    const text = screen.getByText(/Please choose your currency.../i)
    expect(text).toBeInTheDocument()
  })
});
