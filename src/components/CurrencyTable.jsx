import React from 'react'
import Table from "react-bootstrap/Table";
import { useSelector } from 'react-redux';
import { selectCurrency, selectRates } from 'redux/currencyConverter';
// import PropTypes from 'prop-types'

const CurrencyTable = props => {
  const ratesList = useSelector(selectRates)
const currentCurrency = useSelector(selectCurrency)
  
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
  );}


// CurrencyTable.propTypes = {

// }

export default CurrencyTable
