import axios from "axios";
import fetchCurrencyList from "./fetchCurrencyList";

jest.mock("axios");

it.only("fetchCurrencyList test", () => {
  const resp = {
    data: {
      supported_codes: [
        ["AED", "UAE Dirham"],
        ["AFN", "Afghan Afghani"],
      ],
    },
  };
  axios.get.mockImplementation(() => Promise.resolve(resp));
  return fetchCurrencyList().then((result) =>
    expect(result).toEqual(resp.data.supported_codes)
  );
});
