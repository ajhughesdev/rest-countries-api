import axios from 'axios'

export const getCountries = () => {
  return axios.get('https://restcountries.com/v2/all')
}

export const searchByRegion = (countries, region) => {
  if (!region) return countries

  return countries.filter((country) => country.region === region)
}

export const searchByName = (countries, searchInput) => {
  if (searchInput === '') {
    return countries
  }
  const newCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  return newCountries
}
