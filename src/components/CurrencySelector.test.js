import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CurrencySelector from "./CurrencySelector";
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

  it("is Label of select exists", () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const selectCurrency = screen.getByText("Select your currency");
    expect(selectCurrency).toBeInTheDocument();
  });
  it("is List of currencies exist in options", async () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const optionArray = await screen.findAllByTestId("option");
    optionArray.map((option) => expect(option).toBeInTheDocument());
  });
});
