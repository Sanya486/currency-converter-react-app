import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "globalStyles";

import { Navigate, Route, Routes } from "react-router-dom";

import { Converter, CurrencyList } from "pages";
import { Layout } from "components";

import { FETCH_CURRENCY_LIST } from "redux/currencyConverter";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCH_CURRENCY_LIST());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Converter />} />
          <Route path="/currency-list" element={<CurrencyList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
