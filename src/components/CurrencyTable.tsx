import React, { FC } from "react";
import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

import { selectCurrency, selectRates } from "../redux/currencyConverter";

const CurrencyTable: FC = () => {
  const ratesList = useSelector(selectRates);
  const currentCurrency = useSelector(selectCurrency);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Exhange Rate to {currentCurrency}</th>
        </tr>
      </thead>
      <tbody>
        {ratesList &&
          Object.entries(ratesList).map((currency: any, index) => {
            return (
              <tr key={index}>
                <td data-testid="first-column">{index + 1}</td>
                <td data-testid="second-column">{currency[0]}</td>
                <td data-testid="third-column">{currency[1]}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default CurrencyTable;
