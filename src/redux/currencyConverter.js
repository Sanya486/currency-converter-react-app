// ============= Duck`s approach =============
import { createReducer, createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchExchangeRates from "api/fetchExchangeRates";
import fetchCurrencyList from "api/fetchCurrencyList";
// Actions

export const CHANGE_CURRENCY = createAction(
  "currency-converter/reducer/CHANGE_CURRENCY"
);
export const FETCH_RATES = createAction(
  "currency-converter/reducer/FETCH_RATES"
);
export const FETCH_RATES_SUCCEEDED = createAction(
  "currency-converter/reducer/FETCH_RATES_SUCCEEDED"
);
export const FETCH_RATES_FAILED = createAction(
  "currency-converter/reducer/FETCH_RATES_FAILED"
);
export const RESET_CURRENCY = createAction(
  "currency-converter/reducer/RESET_CURRENCY"
);
export const FETCH_CURRENCY_LIST = createAction(
  "currency-converter/reducer/FETCH_CURRENCY_LIST"
);
export const FETCH_CURRENCY_LIST_SUCCEEDED = createAction(
  "currency-converter/reducer/FETCH_CURRENCY_LIST_SUCCEEDED"
);
export const FETCH_CURRENCY_LIST_FAILED = createAction(
  "currency-converter/reducer/FETCH_CURRENCY_LIST_FAILED"
);

// Selectors

export const selectRates = (state) => state.exchangeRates?.rates;
export const selectCurrency = (state) => state.currency;
export const selectCurrencyList = (state) => state.currencyList;

// Initial state

const initialState = {
  currency: "",
  currencyList: null,
  exchangeRates: null,
  error: "",
};

// Saga

function* fetchRates(action) {
  try {
    const rates = yield call(fetchExchangeRates, action.payload);
    yield put(FETCH_RATES_SUCCEEDED(rates));
  } catch (e) {
    yield put(FETCH_RATES_FAILED(e.message));
  }
}

function* fetchListOfCurrency() {
  try {
    const currencyList = yield call(fetchCurrencyList);
    yield put(FETCH_CURRENCY_LIST_SUCCEEDED(currencyList.supported_codes));
  } catch (e) {
    yield put(FETCH_CURRENCY_LIST_FAILED(e.message));
  }
}

export function* watcher() {
  yield takeEvery(FETCH_RATES, fetchRates);
  yield takeEvery(FETCH_CURRENCY_LIST, fetchListOfCurrency);
}

export function* mySaga() {
  yield watcher();
}

// Reducer

export const reducer = createReducer(initialState, (builder) => {
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
    .addCase(FETCH_CURRENCY_LIST_SUCCEEDED, (state, { payload }) => {
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
