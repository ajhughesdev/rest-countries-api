import CountryCard from '../components/CountryCard'
import Search from '../components/Search'

const AllCountries = () => {
  return (
    <main>
      <Search />
      <CountryCard className='countryCard' />
    </main>
  )
}
export default AllCountries
