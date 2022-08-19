import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'

import { AppContext } from '../App.provider'

function CountryDetails() {
  const { getCountry, getCountryByCode, theme } = useContext(AppContext)
  const [country, setCountry] = useState(null)
  const navigate = useNavigate()
  const match = useMatch(':countryCode')

  useEffect(() => {
    setCountry(getCountry(match.params.countryCode))
  }, [match.params.countryCode, getCountry])

  return (
    (country && (
      <div className={`countryDetails ${theme === 'light' ? 'light' : ''}`}>
        <nav>
          <button className='back' onClick={() => navigate(-1)}>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z'
                fill='currentColor'
              />
            </svg>
            Back
          </button>
        </nav>
        <main>
          <img src={country.flag} alt={`${country.name}'s flag`} />
          <h2>{country.name}</h2>
          <ul>
            <li>
              <span>Native Name:</span> {country.nativeName}
            </li>
            <li>
              <span>Population:</span> {country.population.toLocaleString()}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Sub Region:</span> {country.subregion}
            </li>
            <li>
              <span>Capital:</span> {country.capital || 'None'}
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain:</span> {country.topLevelDomain}
            </li>
            <li>
              <span>Currencies:</span>{' '}
              {country.currencies
                ?.map((currency) => currency.name)
                .join(', ') || 'None'}
            </li>
            <li>
              <span>Languages:</span>{' '}
              {country.languages.map((language) => language.name).join(', ')}
            </li>
          </ul>
          {country.borders?.length > 0 && (
            <div className='borderCountries'>
              <h3>Border Countries:</h3>
              <div className='borderCountriesList'>
                {country.borders?.map((countryCode) => (
                  <Link to={`/${countryCode}`} key={countryCode}>
                    <button>{getCountryByCode(countryCode)}</button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    )) || (
      <div
        className={`CountryDetails ${theme === 'light' ? 'light' : ''} error`}
      >
        <h1>Country not found. Please try again!</h1>
        <button className='back' onClick={() => navigate(-1)}>
          {' '}
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z'
              fill='currentColor'
            />
          </svg>
          Back
        </button>
      </div>
    )
  )
}

export default CountryDetails
