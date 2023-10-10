import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { userEvent } from "@testing-library/user-event";

import CurrencySelector from "../../components/CurrencySelector";

import { reducer } from "redux/currencyConverter";

describe("CurrencySelector tests", () => {
  let store;
  let mockDispatch;
  const initialState = {
    currency: "USD",
    currencyList: [
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan "],
    ],
  };

  beforeAll(() => {
    store = createStore(reducer, initialState);
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should Label of select to be exists", () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const selectCurrency = screen.getByText("Select your currency");
    expect(selectCurrency).toBeInTheDocument();
  });

  it("should List of currencies to be exist in options", async () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const optionArray = await screen.findAllByTestId("option");
    optionArray.map((option) => expect(option).toBeInTheDocument());
  });

  it("should reset currency by handleCurrencySelect", async () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const selectElement = screen.getByTestId("select");
    await userEvent.selectOptions(selectElement, "");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it("should handleCurrencySelect function to choose correct currency", async () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const selectElement = screen.getByTestId("select");
    await userEvent.selectOptions(selectElement, "AED");
    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});
