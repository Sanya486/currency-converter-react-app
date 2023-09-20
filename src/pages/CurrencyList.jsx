import React from 'react'
import CurrencySelector from '../components/CurrencySelector/CurrencySelector'
import CurrencyTable from '../components/CurrencyTable/CurrencyTable'
// import PropTypes from 'prop-types'

const CurrencyList = props => {
  return (
    <>
      <CurrencySelector />
      <CurrencyTable/>
    </>
  )
}

// CurrencyList.propTypes = {

// }

export default CurrencyList
