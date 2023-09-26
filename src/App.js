import { Layout } from "components";
import GlobalStyle from "globalStyles";
import { Converter, CurrencyList } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => (
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

export default App;
