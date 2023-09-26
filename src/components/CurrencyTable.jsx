import React from "react";
import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";

import { selectCurrency, selectRates } from "redux/currencyConverter";

const CurrencyTable = () => {
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
          Object.entries(ratesList).map((currency, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{currency[0]}</td>
                <td>{currency[1]}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default CurrencyTable;
