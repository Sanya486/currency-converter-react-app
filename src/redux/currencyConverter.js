// ============= Duck`s approach =============
// Actions

import { createReducer, createAction } from "@reduxjs/toolkit";


export const CHANGE_CURRENCY = createAction(
  "currency-converter/reducer/CHANGE_CURRENCY"
);
export const FETCH_RATES = createAction("currency-converter/reducer/FETCH_RATES");
export const FETCH_RATES_SUCCEEDED = createAction(
  "currency-converter/reducer/FETCH_RATES_SUCCEEDED"
);
export const FETCH_RATES_FAILED = createAction(
  "currency-converter/reducer/FETCH_RATES_FAILED"
);

// Selectors

export const selectRates = state => state.exchangeRates?.rates
export const selectCurrency = state => state.currency

const initialState = {
  currency: "",
  exchangeRates: null,
  error: "",
};

// Reducer

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_RATES_SUCCEEDED, (state, { payload }) => {
        return {
            ...state,
            exchangeRates:payload
      };
    })
      .addCase(FETCH_RATES_FAILED, (state, { payload }) => {
          return {
              ...state,
              error: payload
        }
      }).addCase(CHANGE_CURRENCY, (state, { payload }) => {
        return {
          ...state,
          currency: payload
      }
    });
});
