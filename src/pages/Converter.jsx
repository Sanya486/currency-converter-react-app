import React from "react";

import { ConverterForm, PageTitle, CurrencySelector } from "components";

const Converter = () => (
  <>
    <CurrencySelector />
    <PageTitle title="Currency Converter" />
    <ConverterForm />
  </>
);

export default Converter;
