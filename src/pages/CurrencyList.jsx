import React from "react";
import { CurrencySelector, CurrencyTable } from "components";
// import PropTypes from 'prop-types'

const CurrencyList = (props) => {
  return (
    <>
      <CurrencySelector />
      <CurrencyTable />
    </>
  );
};

// CurrencyList.propTypes = {

// }

export default CurrencyList;
