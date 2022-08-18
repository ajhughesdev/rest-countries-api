import { useContext } from 'react'

import CountryCardItem from './CountryCardItem'

import { AppContext } from '../App.provider'
import { withRouter } from '../utilities'

const CountryCard = ({ history }) => {
  const { theme, countries } = useContext(AppContext)

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
          onClick={() => history.push(country.alpha3Code)}
        />
      ))}
    </>
  )
}

export default withRouter(CountryCard)
