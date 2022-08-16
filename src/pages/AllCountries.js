import { useContext } from 'react'

import CountryCard from '../components/CountryCard'

import { AppContext } from '../App.provider'

const AllCountries = () => {
  const { theme, setCountries } = useContext(AppContext)

  return (
    <main >
      <CountryCard />
    </main>
  )
}
export default AllCountries
