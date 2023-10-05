// ============= Duck`s approach =============
import { createReducer, createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchExchangeRates from "../api/fetchExchangeRates";
import fetchCurrencyList from "../api/fetchCurrencyList";

// Types

export type Currency = [string, string];

type State = {
  currency: string;
  currencyList: Array<Currency> | null;
  exchangeRates: object | null;
  error: string;
};
// Actions

export const CHANGE_CURRENCY = createAction<string>("currency-converter/reducer/CHANGE_CURRENCY");
export const FETCH_RATES = createAction<string>("currency-converter/reducer/FETCH_RATES");
export const FETCH_RATES_SUCCEEDED = createAction<object>("currency-converter/reducer/FETCH_RATES_SUCCEEDED");
export const FETCH_RATES_FAILED = createAction<string>("currency-converter/reducer/FETCH_RATES_FAILED");
export const RESET_CURRENCY = createAction("currency-converter/reducer/RESET_CURRENCY");
export const FETCH_CURRENCY_LIST = createAction("currency-converter/reducer/FETCH_CURRENCY_LIST");
export const FETCH_CURRENCY_LIST_SUCCEEDED = createAction<Array<Currency>>(
  "currency-converter/reducer/FETCH_CURRENCY_LIST_SUCCEEDED"
);
export const FETCH_CURRENCY_LIST_FAILED = createAction<string>("currency-converter/reducer/FETCH_CURRENCY_LIST_FAILED");

// Selectors

export const selectRates: (state: State) => object | null = (state) => state.exchangeRates;
export const selectCurrency: (state: State) => string = (state) => state.currency;
export const selectCurrencyList: (state: State) => Array<Currency> | null = (state) => state.currencyList;

// Initial state

const initialState: State = {
  currency: "",
  currencyList: [],
  exchangeRates: {},
  error: "",
};

// Saga

function* fetchRates(action: { type: string; payload: string }): Generator<unknown, any, object> {
  try {
    const rates = yield call(fetchExchangeRates, action.payload);
    yield put(FETCH_RATES_SUCCEEDED(rates));
  } catch (e: any) {
    yield put(FETCH_RATES_FAILED(e.message));
  }
}

function* fetchListOfCurrency(): Generator<unknown, any, Array<Currency>> {
  try {
    const currencyList = yield call(fetchCurrencyList);
    yield put(FETCH_CURRENCY_LIST_SUCCEEDED(currencyList));
  } catch (e: any) {
    yield put(FETCH_CURRENCY_LIST_FAILED(e.message));
  }
}

export function* watcher(): Generator {
  yield takeEvery(FETCH_RATES, fetchRates);
  yield takeEvery(FETCH_CURRENCY_LIST, fetchListOfCurrency);
}

export function* mySaga(): Generator {
  yield watcher();
}

// Reducer

export const reducer = createReducer<State>(initialState, (builder) => {
  builder
    .addCase(FETCH_RATES_SUCCEEDED, (state, { payload }) => {
      return {
        ...state,
        exchangeRates: payload,
      };
    })
    .addCase(FETCH_RATES_FAILED, (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    })
    .addCase(CHANGE_CURRENCY, (state, { payload }) => {
      return {
        ...state,
        currency: payload,
      };
    })
    .addCase(RESET_CURRENCY, (state) => {
      return {
        ...state,
        curreny: "",
      };
    })
    .addCase(FETCH_CURRENCY_LIST_SUCCEEDED, (state, { payload }: { payload: Array<Currency> }) => {
      return {
        ...state,
        currencyList: payload,
      };
    })
    .addCase(FETCH_CURRENCY_LIST_FAILED, (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    });
});
