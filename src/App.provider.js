import { createContext, useEffect, useState } from 'react'
import { searchByName, searchByRegion } from './utilities'

export const AppContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
  countries: [],
  setCountries: () => {},
  getCountry: () => {},
  allCountries: [],
  setAllCountries: () => {},
  getCountryByCode: () => {},
  searchInput: '',
  setSearchInput: () => {},
  region: '',
  setRegion: () => {},
  regionList: [],
  selectedCountry: '',
})

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [region, setRegion] = useState('')
  const [regionList] = useState([
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ])

  const switchTheme = () => setTheme(theme === 'light' ? '' : 'light')

  const getCountryByCode = (code) => {
    const country = allCountries.find((country) => country.alpha3Code === code)
    const name = country ? country.name : code
    return name
  }

  const getCountry = (code) =>
    allCountries.find((country) => country.alpha3Code === code)

  useEffect(() => {
    const countriesByRegion = searchByRegion(allCountries, region)
    const newCountries = searchByName(countriesByRegion, searchInput)
    setCountries(newCountries)
  }, [allCountries, region, searchInput])

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        countries,
        setCountries,
        getCountry,
        allCountries,
        setAllCountries,
        getCountryByCode,
        searchInput,
        setSearchInput,
        region,
        setRegion,
        regionList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
