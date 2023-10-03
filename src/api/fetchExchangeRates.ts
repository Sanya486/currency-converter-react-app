import axios from "axios";

export default async function fetchExchangeRates(currency: string): Promise<object> {
  const response = await axios.get(`https://open.er-api.com/v6/latest/${currency}`);
  return response.data.rates;
}
