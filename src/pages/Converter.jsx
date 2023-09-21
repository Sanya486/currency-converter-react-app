import React from "react";
import { ConverterForm, PageTitle, CurrencySelector } from "components";

// import PropTypes from 'prop-types'

const Converter = (props) => (
  <>
    <CurrencySelector />
    <PageTitle title="Currency Converter" />
    <ConverterForm />
  </>
);

// Converter.propTypes = {

// }

export default Converter;
