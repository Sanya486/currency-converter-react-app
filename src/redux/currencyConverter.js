// ============= Duck`s approach =============
import { createReducer, createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchExchangeRates from "api/fetchExchangeRates";
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

// Selectors

export const selectRates = (state) => state.exchangeRates?.rates;
export const selectCurrency = (state) => state.currency;

const initialState = {
  currency: "",
  exchangeRates: null,
  error: "",
};

// Saga

function* fetchRates(action) {
  try {
    const rates = yield call(fetchExchangeRates, action.payload);
    console.log(rates);
    yield put(FETCH_RATES_SUCCEEDED(rates));
  } catch (e) {
    yield put(FETCH_RATES_FAILED(e.message));
  }
}

export function* mySaga() {
  yield takeEvery(FETCH_RATES, fetchRates);
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
    });
});
