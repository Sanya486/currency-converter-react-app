import React, { useState, FC } from "react";
import { Formik } from "formik";

import Form from "react-bootstrap/Form";
import { LabelSt, FormWrap, ButtonSt, Text, InfoText, FormControlSt } from "../styled/ConvertedForm.styled";
import { ErrorTextSt } from "styled/ErrorText";
import { useSelector } from "react-redux";
import { selectCurrency, selectCurrencyList, selectRates } from "redux/currencyConverter";
import { Calculator } from "react-bootstrap-icons";
import { convertFormValidation } from "utils/validation";

import { Currency } from "redux/currencyConverter";

interface CurrencyConverterState {
  inflowAmount: string;
  convertedToCurrency: string;
}

const ConverterForm: FC = () => {
  const [result, setResult] = useState<number | undefined>();
  const [convertedToCurrency, setConvertedToCurrency] = useState<string>("");
  const exchangeRates: any = useSelector(selectRates);
  const currentCurrency: string | null = useSelector(selectCurrency);
  const currencyList: Currency[] | null = useSelector(selectCurrencyList);
  return (
    <>
      <FormWrap>
        {!currentCurrency && <InfoText>Please choose your currency...</InfoText>}
        <Formik
          initialValues={{ inflowAmount: "", convertedToCurrency: "" }}
          validationSchema={convertFormValidation}
          onSubmit={(values: CurrencyConverterState) => {
            if (values.convertedToCurrency === "") {
              return;
            }
            const calc = Number(values.inflowAmount) * Number(exchangeRates[values.convertedToCurrency]);
            setResult(calc);
            setConvertedToCurrency(values.convertedToCurrency);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <LabelSt>Amount of {currentCurrency}</LabelSt>
                <FormControlSt
                  type="number"
                  name="inflowAmount"
                  value={values.inflowAmount}
                  placeholder="Enter quantity"
                  onChange={handleChange}
                />
                {errors.inflowAmount && touched.inflowAmount && <ErrorTextSt>{errors.inflowAmount}</ErrorTextSt>}
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
                  {currencyList &&
                    currencyList.map((currency: string[], index: number) => (
                      <option key={index} value={currency[0]}>
                        {currency.join(" | ")}
                      </option>
                    ))}
                </Form.Select>
                {errors.convertedToCurrency && touched.convertedToCurrency && (
                  <ErrorTextSt>{errors.convertedToCurrency}</ErrorTextSt>
                )}
              </Form.Group>

              <Text>
                {result?.toFixed(2)} {convertedToCurrency}
              </Text>
              <ButtonSt disabled={!currentCurrency} variant="primary" type="submit">
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
