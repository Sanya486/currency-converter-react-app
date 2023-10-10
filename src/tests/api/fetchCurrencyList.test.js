import axios from "axios";

import fetchCurrencyList from "../../api/fetchCurrencyList";

jest.mock("axios");

it.only("should fetch list of currencies", () => {
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
