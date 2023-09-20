import React from "react";
import ConverterForm from "../components/ConverterForm/ConverterForm";
import PageTitle from "../components/PageTitle/PageTitle";
import CurrencySelector from "../components/CurrencySelector/CurrencySelector";


// import PropTypes from 'prop-types'

const Converter = (props) => {
  return (
    <>
      <CurrencySelector/>
      <PageTitle title='Currency Converter' />
      <ConverterForm/>
    </>
  );
};

// Converter.propTypes = {

// }

export default Converter;
