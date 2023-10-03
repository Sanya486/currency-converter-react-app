import React, { FC } from "react";

import { ConverterForm, PageTitle, CurrencySelector } from "components";

const Converter: FC = () => (
  <>
    <CurrencySelector />
    <PageTitle title="Currency Converter" />
    <ConverterForm />
  </>
);

export default Converter;
