import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ConverterForm from "../../components/ConverterForm";

import { reducer } from "redux/currencyConverter";

describe("ConverterForm tests", () => {
  let store;
  const initialState = {
    currency: "UAH",
    currencyList: [
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan "],
    ],
  };

  beforeAll(() => {
    store = createStore(reducer, initialState);
  });

  it("should render options for select with currencies", async () => {
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    const optionArray = await screen.findAllByTestId("option");
    optionArray.map((option) => expect(option).toBeInTheDocument());
  });

  it("should 'Please choose your currency...' to be visible", () => {
    store = createStore(reducer, {
      currency: "",
      currencyList: [
        ["AED", "UAE Dirham"],
        ["AFN", "Afghan "],
      ],
    });
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    const text = screen.getByText(/Please choose your currency.../i);
    expect(text).toBeInTheDocument();
  });

  it("should chosen currency to be visible", async () => {
    store = createStore(reducer, {
      currency: "UAH",
      currencyList: [
        ["AED", "UAE Dirham"],
        ["AFN", "Afghan "],
      ],
    });
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    const label = screen.getByText(/UAH/i);
    expect(label.textContent.includes(initialState.currency)).toBeTruthy();
  });

  it("should error 'Enter amount of currency to convert' to be visible if submit without amount of currency", async () => {
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("btn-submit"));
    const error = await screen.findByText(
      /Enter amount of currency to convert/i
    );
    expect(error).toBeInTheDocument();
  });

  it("should error 'Please choose currency to convert' to be visible if submit without covert-to-currency", async () => {
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("btn-submit"));
    const error = await screen.findByText(/Please choose currency to convert/i);
    expect(error).toBeInTheDocument();
  });

  it("should calculations to be correct", async () => {
    store = createStore(reducer, {
      currency: "UAH",
      currencyList: [["USD", "US Dollar"]],
      exchangeRates: {
        USD: 37,
      },
    });
    render(
      <Provider store={store}>
        <ConverterForm />
      </Provider>
    );
    fireEvent.change(screen.getByTestId("currency-amount"), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByTestId("currency-select"), {
      target: { value: "USD" },
    });
    fireEvent.click(screen.getByTestId("btn-submit"));
    await waitFor(() => {
      expect(screen.getByTestId("result")).toHaveTextContent("37000.00");
    });
  });
});
