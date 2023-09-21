import React from 'react'
import Table from "react-bootstrap/Table";
// import PropTypes from 'prop-types'

const CurrencyTable = props =>  (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Exhange Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>UAH</td>
          <td>1</td>
       
        </tr>
        <tr>
          <td>2</td>
          <td>USD</td>
          <td>37.7</td>
        </tr>
        <tr>
          <td>3</td>
          <td>EUR</td>
          <td>41.5</td>
        </tr>
  
      </tbody>
    </Table>
  );


// CurrencyTable.propTypes = {

// }

export default CurrencyTable
