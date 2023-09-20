import Layout from "./components/Layout/Layout";
import Converter from "./pages/Converter";
import CurrencyList from "./pages/CurrencyList";
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Converter />} />
        <Route
          path="/currency-list"
          element={<CurrencyList/> }
        />
       </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
