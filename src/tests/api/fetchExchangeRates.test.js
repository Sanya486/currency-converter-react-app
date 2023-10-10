import axios from "axios";

import fetchExchangeRates from "../../api/fetchExchangeRates";

jest.mock("axios");

it.only("should fetch exchange rates", () => {
  const resp = {
    data: {
      rates: {
        UAH: 1,
        USD: 100,
        EUR: 300,
      },
    },
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));
  return fetchExchangeRates("UAH").then((result) =>
    expect(result).toEqual(resp.data.rates)
  );
});
