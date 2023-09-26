import React, { useState } from "react";
import { Formik } from "formik";

import Form from "react-bootstrap/Form";
import {
  LabelSt,
  FormWrap,
  ButtonSt,
  Text,
  InfoText
} from "../styled/ConvertedForm.styled";
import { ErrorTextSt } from "styled/ErrorText";
import { useSelector } from "react-redux";
import { selectCurrency, selectRates } from "redux/currencyConverter";
import { Calculator } from "react-bootstrap-icons";
import { convertFormValidation } from "utils/validation";

const ConverterForm = () => {
  const [result, setResult] = useState();
  const [convertedToCurrency, setConvertedToCurrency] = useState("");
  const exchangeRates = useSelector(selectRates);
  const currentCurrency = useSelector(selectCurrency);
  return (
    <>
      <FormWrap>
        {!currentCurrency && (
          <InfoText>Please choose your currency...</InfoText>
        )}
        <Formik
          initialValues={{ inflowAmount: 0, convertedToCurrency: "" }}
          validationSchema={convertFormValidation}
          onSubmit={(values) => {
            if (values.convertedToCurrency === "") {
              return;
            }
            const calc =
              Number(values.inflowAmount) *
              Number(exchangeRates[values.convertedToCurrency]);
            setResult(calc);
            setConvertedToCurrency(values.convertedToCurrency);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <LabelSt>Amount of {currentCurrency}</LabelSt>
                <Form.Control
                  type="number"
                  name="inflowAmount"
                  value={values.inflowAmount}
                  placeholder="Enter quantity"
                  onChange={handleChange}
                />
                {errors.inflowAmount && touched.inflowAmount && (
                  <ErrorTextSt>{errors.inflowAmount}</ErrorTextSt>
                )}
              </Form.Group>

              <Form.Group>
                <LabelSt>Converted to</LabelSt>
                <Form.Select
                  aria-label="Currency list select"
                  name="convertedToCurrency"
                  value={values.convertedToCurrency}
                  onChange={handleChange}
                >
                  <option value="">Click to choose currency</option>
                  <option value="USD">USD</option>
                  <option value="UAH">UAH</option>
                  <option value="EUR">EUR</option>
                </Form.Select>
                {errors.convertedToCurrency && touched.convertedToCurrency && (
                  <ErrorTextSt>{errors.convertedToCurrency}</ErrorTextSt>
                )}
              </Form.Group>

              <Text>
                {result?.toFixed(2)} {convertedToCurrency}
              </Text>
              <ButtonSt
                disabled={!currentCurrency}
                variant="primary"
                type="submit"
              >
                <Calculator size={23} />
              </ButtonSt>
            </form>
          )}
        </Formik>
      </FormWrap>
    </>
  );
};

export default ConverterForm;
