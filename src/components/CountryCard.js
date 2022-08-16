import { useContext } from 'react'

import CountryCardItem from './CountryCardItem'

import { AppContext } from '../App.provider'

const CountryCard = () => {
  const { theme, countries } = useContext(AppContext)

  return (
    <article>
      {countries.map((country) => (
        <CountryCardItem
          theme={theme}
          key={country.alpha3Code}
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
        />
      ))}
    </article>
  )
}
export default CountryCard
