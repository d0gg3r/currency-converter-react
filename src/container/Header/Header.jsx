import React from 'react'
import { fetchData } from '../../fetchData'
import './Header.scss'

const Header = () => {
  const currentDateTime = new Date()
  const day = currentDateTime.getDate()
  const month = currentDateTime.getMonth() + 1
  const year = currentDateTime.getFullYear()
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      console.log(result)
      const usdToUah = (result.USD * result.UAH).toFixed(2)
      const eurToUah = (usdToUah / result.EUR).toFixed(2)
      console.log(usdToUah)
      setData([usdToUah, eurToUah])
    }
    getData()
  }, [])

  return (
    <div className="header section__padding flex__center wrapper">
      <div className="header__wrapper">
        <div className="header__title">
          <h1>
            Free
            <br /> Currency
            <br /> Converter
          </h1>
        </div>
        <div className="header__currency">
          <h3>USD - {data[0]}₴ </h3>
          <h3>EUR - {data[1]}₴ </h3>
          <p>
            Last update {day}/{month}/{year}
          </p>
          <p>Enter the values in the currency calculator.</p>
          <a href="#Converter">Open Converter</a>
        </div>
      </div>
    </div>
  )
}

export default Header
