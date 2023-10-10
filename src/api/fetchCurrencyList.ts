import axios from "axios";

import { Currency } from "../redux/currencyConverter";

const API = "39dd80977a3b1dca49099b95";
const URL = `https://v6.exchangerate-api.com/v6/${API}/codes`;

export default async function fetchCurrencyList(): Promise<Currency[]> {
  const response = await axios.get(URL);
  return response.data.supported_codes;
}
