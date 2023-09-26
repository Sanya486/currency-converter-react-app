import axios from "axios";

const API = "39dd80977a3b1dca49099b95";

export default async function fetchCurrencyList() {
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${API}/codes`
  );
  return response.data;
}
