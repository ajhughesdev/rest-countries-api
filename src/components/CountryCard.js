import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import CountryCardItem from './CountryCardItem'

import { AppContext } from '../App.provider'

const CountryCard = ({ history }) => {
  const { theme, countries } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <>
      {countries.map((country) => (
        <CountryCardItem
          theme={theme}
          key={country.alpha3Code}
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
          onClick={() => navigate(country.alpha3Code)}
        />
      ))}
    </>
  )
}

export default CountryCard
