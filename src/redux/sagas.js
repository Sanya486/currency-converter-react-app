import { call, put, takeEvery } from 'redux-saga/effects'
import fetchExchangeRates from 'api/fetchExchangeRates'
import { FETCH_RATES, FETCH_RATES_SUCCEEDED, FETCH_RATES_FAILED } from './currencyConverter'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRates(action) {
  try {
    const rates = yield call(fetchExchangeRates, action.payload)
    console.log(rates)
    yield put(FETCH_RATES_SUCCEEDED(rates))
  } catch (e) {
    yield put(FETCH_RATES_FAILED(e.message))
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(FETCH_RATES, fetchRates)
}

export default mySaga