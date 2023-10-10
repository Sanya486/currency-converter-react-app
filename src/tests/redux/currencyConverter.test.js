import { call, put, takeEvery } from "redux-saga/effects";

import fetchCurrencyList from "api/fetchCurrencyList";
import fetchExchangeRates from "api/fetchExchangeRates";
import {
  CHANGE_CURRENCY,
  fetchListOfCurrency,
  fetchRates,
  FETCH_CURRENCY_LIST,
  FETCH_CURRENCY_LIST_FAILED,
  FETCH_CURRENCY_LIST_SUCCEEDED,
  FETCH_RATES,
  FETCH_RATES_FAILED,
  FETCH_RATES_SUCCEEDED,
  initialState,
  mySaga,
  reducer,
  RESET_CURRENCY,
  watcher,
} from "../../redux/currencyConverter";

describe("fetchRates generator testing", () => {
  it("should fetchRates to be success", () => {
    const action = {
      payload: "USD",
    };
    const generatorFn = fetchRates(action);
    expect(generatorFn.next().value).toEqual(
      call(fetchExchangeRates, action.payload)
    );
    const rates = { USD: 1, AED: 80.32, AOA: 45.54 };
    expect(generatorFn.next(rates).value).toEqual(
      put(FETCH_RATES_SUCCEEDED(rates))
    );
    expect(generatorFn.next().done).toEqual(true);
  });

  it("should fetchRates to be failed", () => {
    const action = {
      payload: "USD",
    };
    const generatorFn = fetchRates(action);
    generatorFn.next();
    const errorMessage = "Request failed";
    expect(generatorFn.throw(new Error(errorMessage)).value).toEqual(
      put(FETCH_RATES_FAILED(errorMessage))
    );
    expect(generatorFn.next().done).toEqual(true);
  });
});

describe("fetchListOfCurrency generator testing", () => {
  it("should fetchListOfCurrency to be success", () => {
    const generatorFn = fetchListOfCurrency();
    expect(generatorFn.next().value).toEqual(call(fetchCurrencyList));
    const currencyList = [
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan Afghani"],
    ];
    expect(generatorFn.next(currencyList).value).toEqual(
      put(FETCH_CURRENCY_LIST_SUCCEEDED(currencyList))
    );
    expect(generatorFn.next().done).toEqual(true);
  });

  it("should fetchListOfCurrency to be falied", () => {
    const generatorFn = fetchListOfCurrency();
    generatorFn.next();
    const errorMessage = "Request failed";
    expect(generatorFn.throw(new Error(errorMessage)).value).toEqual(
      put(FETCH_CURRENCY_LIST_FAILED(errorMessage))
    );
    expect(generatorFn.next().done).toEqual(true);
  });
});

it("should saga-watcher to work properly", () => {
  const generatorFn = watcher();
  expect(generatorFn.next().value).toEqual(takeEvery(FETCH_RATES, fetchRates));
  expect(generatorFn.next().value).toEqual(
    takeEvery(FETCH_CURRENCY_LIST, fetchListOfCurrency)
  );
  expect(generatorFn.next().done).toEqual(true);
});

it("should mySaga to work properly", () => {
  const generatorFn = mySaga();
  expect(generatorFn.next().value).toEqual(watcher());
  expect(generatorFn.next().done).toEqual(true);
});

describe("Reducer tests", () => {
  it("should FETCH_RATES_SUCCEEDED works properly", () => {
    const rates = { UAH: 100 };
    expect(reducer(initialState, FETCH_RATES_SUCCEEDED(rates))).toMatchObject({
      ...initialState,
      exchangeRates: rates,
    });
  });

  it("should FETCH_RATES_FAILED works properly", () => {
    const error = "Error";
    expect(reducer(initialState, FETCH_RATES_FAILED(error))).toMatchObject({
      ...initialState,
      error,
    });
  });

  it("should CHANGE_CURRENCY works properly", () => {
    const currency = "UAH";
    expect(reducer(initialState, CHANGE_CURRENCY(currency))).toMatchObject({
      ...initialState,
      currency,
    });
  });

  it("should RESET_CURRENCY works properly", () => {
    expect(reducer(initialState, RESET_CURRENCY())).toMatchObject({
      ...initialState,
      currency: "",
    });
  });

  it("should FETCH_CURRENCY_LIST_SUCCEEDED works properly", () => {
    const currencyList = [
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan Afghani"],
    ];
    expect(
      reducer(initialState, FETCH_CURRENCY_LIST_SUCCEEDED(currencyList))
    ).toMatchObject({
      ...initialState,
      currencyList,
    });
  });

  it("should FETCH_CURRENCY_LIST_FAILED works properly", () => {
    const error = "Error";
    expect(
      reducer(initialState, FETCH_CURRENCY_LIST_FAILED(error))
    ).toMatchObject({
      ...initialState,
      error,
    });
  });
});
