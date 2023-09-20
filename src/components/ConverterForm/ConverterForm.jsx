import React from "react";

// import PropTypes from 'prop-types'

import Form from "react-bootstrap/Form";
import { LabelSt, FormWrap, ButtonSt, Text, DownArrowSt } from "./ConvertedForm.styled";

const ConverterForm = (props) => {
  return (
    <FormWrap>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <LabelSt>Amount</LabelSt>
          <Form.Control type="email" placeholder="Enter quantity" />
        </Form.Group>
        <Form.Group>
          <LabelSt>Converted to</LabelSt>
          <Form.Select aria-label="Currency list select">
            <option>Click to choose currency</option>
            <option value="1">USD</option>
            <option value="2">UAH</option>
            <option value="3">EUR</option>
          </Form.Select>
        </Form.Group>
        <DownArrowSt size={23} />
        <Text>1000UAH</Text>

        <ButtonSt variant="primary" type="submit">
          Convert
        </ButtonSt>
      </Form>
    </FormWrap>
  );
};

// ConverterForm.propTypes = {

// }

export default ConverterForm;
