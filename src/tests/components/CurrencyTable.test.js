import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import CurrencyTable from "../../components/CurrencyTable";

import { reducer } from "redux/currencyConverter";

describe("CurrencyTable tests", () => {
  let store;
  const initialState = {
    currency: "USD",
    exchangeRates: {
      USD: 1,
      AUD: 1.4817,
      BGN: 1.7741,
      CAD: 1.3168,
      CHF: 0.9774,
      CNY: 6.9454,
    },
  };

  beforeAll(() => {
    store = createStore(reducer, initialState);
  });

  it("should first column`s Table data to be properly exist", async () => {
    render(
      <Provider store={store}>
        <CurrencyTable />
      </Provider>
    );
    const firstColumn = await screen.findAllByTestId("first-column");
    firstColumn.map((item, index) => expect(item).toHaveTextContent(index + 1));
  });

  it("should second column`s Table data to be properly exist", async () => {
    render(
      <Provider store={store}>
        <CurrencyTable />
      </Provider>
    );
    const secondColumn = await screen.findAllByTestId("second-column");
    secondColumn.map((item) =>
      expect(initialState.exchangeRates[item.textContent]).not.toBeUndefined()
    );
  });

  it("should third column`s Table data to be properly exist", async () => {
    render(
      <Provider store={store}>
        <CurrencyTable />
      </Provider>
    );
    const secondColumn = await screen.findAllByTestId("second-column");
    const thirdColumn = await screen.findAllByTestId("third-column");
    thirdColumn.map((item, index) =>
      expect(item.textContent).toBe(
        String(initialState.exchangeRates[secondColumn[index].textContent])
      )
    );
  });
});
