import axios from 'axios'

export const getCountries = () => {
  return axios.get('https://restcountries.com/v2/all')
}
