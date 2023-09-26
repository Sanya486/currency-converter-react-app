import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { Wrap, LabelSt } from "../styled/CurrencySecelor.styled";

import {
  CHANGE_CURRENCY,
  FETCH_RATES,
  selectCurrency,
} from "redux/currencyConverter";

const CurrencySelector = () => {
  const dispatch = useDispatch();

  const currentCurrency = useSelector(selectCurrency);

  const handleCurrencySelect = (e) => {
    const { value } = e.target;
    if (value === "") return;
    dispatch(CHANGE_CURRENCY(value));
    dispatch(FETCH_RATES(value));
  };

  return (
    <Wrap>
      <Form.Group>
        <LabelSt>Select your currency</LabelSt>
        <Form.Select
          aria-label="Currency list select"
          defaultValue={currentCurrency}
          onChange={handleCurrencySelect}
        >
          <option value="">Click to choose currency</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
        </Form.Select>
      </Form.Group>
    </Wrap>
  );
};

export default CurrencySelector;
