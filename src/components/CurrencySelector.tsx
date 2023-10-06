import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { Wrap, LabelSt } from "../styled/CurrencySecelor.styled";

import {
  CHANGE_CURRENCY,
  FETCH_RATES,
  RESET_CURRENCY,
  selectCurrency,
  selectCurrencyList,
} from "../redux/currencyConverter";

const CurrencySelector: FC = () => {
  const dispatch = useDispatch();

  const currentCurrency = useSelector(selectCurrency);
  const currencyList = useSelector(selectCurrencyList);

  const handleCurrencySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value }: { value: string } = e.target;
    if (value === "") {
      dispatch(RESET_CURRENCY());
      return
    }
    dispatch(CHANGE_CURRENCY(value));
    dispatch(FETCH_RATES(value));
  };

  return (
    <Wrap>
      <Form.Group>
        <LabelSt>Select your currency</LabelSt>
        <Form.Select
          aria-label="Currency list select"
          data-testid="select"
          defaultValue={currentCurrency}
          onChange={handleCurrencySelect}
        >
          <option value="">Click to choose currency</option>
          {currencyList &&
            currencyList.map((currency: string[], index: number) => (
              <option key={index} data-testid="option" value={currency[0]}>
                {currency.join(" | ")}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
    </Wrap>
  );
};

export default CurrencySelector;
