import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CurrencySelector from "./CurrencySelector";
import { reducer } from "redux/currencyConverter";
import { userEvent } from "@testing-library/user-event";


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
  it("test reset currency in the handleCurrencySelect", async () => {
    render(
      <Provider store={store}>
        <CurrencySelector />
      </Provider>
    );
    const selectElement = screen.getByTestId("select");
    await userEvent.selectOptions(selectElement, "");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  it("test handleCurrencySelect function", async () => {
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
