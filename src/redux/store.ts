import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./currencyConverter";
import { reducer } from "./currencyConverter";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StoreType = typeof store;
