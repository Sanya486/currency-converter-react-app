import React from "react";

import { CurrencySelector, CurrencyTable } from "components";

const CurrencyList: React.FC = () => {
  return (
    <>
      <CurrencySelector />
      <CurrencyTable />
    </>
  );
};

export default CurrencyList;
