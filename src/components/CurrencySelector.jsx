import React from "react";
import { Form } from "react-bootstrap";
import { Wrap, LabelSt } from "../styled/CurrencySecelor.styled";
// import PropTypes from 'prop-types'

const CurrencySelector = (props) => (
  <Wrap>
    <Form.Group>
      <LabelSt>Select your currency</LabelSt>
      <Form.Select aria-label="Currency list select" defaultValue={"2"}>
        <option>Click to choose currency</option>
        <option value="1">USD</option>
        <option value="2">UAH</option>
        <option value="3">EUR</option>
      </Form.Select>
    </Form.Group>
  </Wrap>
);

// CurrencySelector.propTypes = {

// }

export default CurrencySelector;
