import React, { FC } from "react";

import { CurrencySelector, CurrencyTable } from "components";

const CurrencyList: FC = () => {
  return (
    <>
      <CurrencySelector />
      <CurrencyTable />
    </>
  );
};

export default CurrencyList;
