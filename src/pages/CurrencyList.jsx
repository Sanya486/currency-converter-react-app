import React from "react";

import { CurrencySelector, CurrencyTable } from "components";

const CurrencyList = () => {
  return (
    <>
      <CurrencySelector />
      <CurrencyTable />
    </>
  );
};

export default CurrencyList;
