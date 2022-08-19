import CountryCard from '../components/CountryCard'
import Search from '../components/Search'

const AllCountries = () => {
  return (
    <>
      <nav>
        <Search />
      </nav>
      <main>
        <CountryCard className='countryCard' />
      </main>
    </>
  )
}
export default AllCountries
