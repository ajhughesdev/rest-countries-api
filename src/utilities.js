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

export const getBorders = (borders) => {
  if (borders.length === 0) return 'None'

  if (borders.length > 0) {
    return borders.toString()
  }

  return borders
}

export const getDataArrays = (response) => {
  let prettyData = ''

  if (response.length === 1) return response[0].name

  for (let i = 0; i < response.length; i++) {
    prettyData += ` ${response[i].name}, `
  }
  return prettyData
}
