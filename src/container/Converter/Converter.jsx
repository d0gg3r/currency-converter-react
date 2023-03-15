import React from 'react'
import Currency from './Currency/Currency'
import { fetchData } from '../../fetchData'

import './Converter.scss'
import Ticker from '../Ticker/Ticker'

const Converter = () => {
  const [rates, setRates] = React.useState([])
  const [currencyTo, setCurrencyTo] = React.useState('UAH')
  const [amountFrom, setAmountFrom] = React.useState('')
  const [amountTo, setAmountTo] = React.useState('')
  const [currencyFrom, setCurrencyFrom] = React.useState('USD')

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setRates(result)
    }
    getData()
  }, [])

  function format(number) {
    return number.toFixed(3)
  }

  const handleAmountFrom = (amountFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]))
    setAmountFrom(amountFrom)
  }

  const handleCurrencyFrom = (currencyFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]))
    setCurrencyFrom(currencyFrom)
  }

  const handleAmountTo = (amountTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]))
    setAmountTo(amountTo)
  }

  const handleCurrencyTo = (currencyTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]))
    setCurrencyTo(currencyTo)
  }

  return (
    <main id="Converter" className="wrapper">
      <Ticker />
      <div className="converter__wrapper">
        <div className="blob">
          <div className="blob-1"></div>
          <div className="blob-3 flex__center"></div>
        </div>
        <div className="converter__container flex__center">
          <Currency
            amount={amountFrom}
            onAmountChange={handleAmountFrom}
            onCurrencyChange={handleCurrencyFrom}
            currency={currencyFrom}
            name="input1"
          />
          <div className="equals">
            <span>=</span>
          </div>
          <Currency
            name="input2"
            amount={amountTo}
            onCurrencyChange={handleCurrencyTo}
            onAmountChange={handleAmountTo}
            currency={currencyTo}
          />
        </div>
        <div className="blob">
          <div className="blob-2"></div>
        </div>
      </div>
    </main>
  )
}

export default Converter
