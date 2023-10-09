import fetchCurrencyList from "api/fetchCurrencyList";
import fetchExchangeRates from "api/fetchExchangeRates";
import { call, put, takeEvery } from "redux-saga/effects";
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
} from "./currencyConverter";

describe("Fetch Rates generator testing", () => {
  it("fetch rates success", () => {
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
  it("fetch fates fail", () => {
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

describe("Fetch List of Currency generator testing", () => {
  it("fetch rates success", () => {
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
  it("fetch rates fail", () => {
    const generatorFn = fetchListOfCurrency();
    generatorFn.next();
    const errorMessage = "Request failed";
    expect(generatorFn.throw(new Error(errorMessage)).value).toEqual(
      put(FETCH_CURRENCY_LIST_FAILED(errorMessage))
    );
    expect(generatorFn.next().done).toEqual(true);
  });
});

it("watcher test", () => {
  const generatorFn = watcher();
  expect(generatorFn.next().value).toEqual(takeEvery(FETCH_RATES, fetchRates));
  expect(generatorFn.next().value).toEqual(
    takeEvery(FETCH_CURRENCY_LIST, fetchListOfCurrency)
  );
  expect(generatorFn.next().done).toEqual(true);
});

it("mySage test", () => {
  const generatorFn = mySaga();
  expect(generatorFn.next().value).toEqual(watcher());
  expect(generatorFn.next().done).toEqual(true);
});

describe("Reducer tests", () => {
  it("FETCH_RATES_SUCCEEDED", () => {
    const rates = { UAH: 100 };
    expect(reducer(initialState, FETCH_RATES_SUCCEEDED(rates))).toMatchObject({
      ...initialState,
      exchangeRates: rates,
    });
  });
  it("FETCH_RATES_FAILED", () => {
    const error = "Error";
    expect(reducer(initialState, FETCH_RATES_FAILED(error))).toMatchObject({
      ...initialState,
      error,
    });
  });
  it("CHANGE_CURRENCY", () => {
    const currency = "UAH";
    expect(reducer(initialState, CHANGE_CURRENCY(currency))).toMatchObject({
      ...initialState,
      currency,
    });
  });
  it("RESET_CURRENCY", () => {
    expect(reducer(initialState, RESET_CURRENCY())).toMatchObject({
      ...initialState,
      currency: "",
    });
  });
  it("FETCH_CURRENCY_LIST_SUCCEEDED", () => {
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
  it("FETCH_CURRENCY_LIST_FAILED", () => {
    const error = "Error";
    expect(
      reducer(initialState, FETCH_CURRENCY_LIST_FAILED(error))
    ).toMatchObject({
      ...initialState,
      error,
    });
  });
});
