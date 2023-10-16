import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "redux/currencyConverter";

export const MockedState = {
  currency: "UAH",
  currencyList: [
    ["AED", "UAE Dirham"],
    ["AFN", "Afghan "],
  ],
  exchangeRates: {
    EUR: 1,
    AED: 3.861184,
    AFN: 79.91183,
    ALL: 105.810731,
    AMD: 422.87879,
    ANG: 1.881966,
    AOA: 875.848602,
    ARS: 368.013651,
    AUD: 1.66764,
    AWG: 1.881966,
    AZN: 1.793998,
    BAM: 1.95583,
    BBD: 2.102755,
    BDT: 116.043719,
    BGN: 1.95583,
    BHD: 0.395318,
    BIF: 2981.006369,
  },
  error: "",
};

export const store = createStore(reducer, MockedState);

export const MockedForm = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
