import { useContext } from 'react'

import SearchInput from './SearchInput'
import SelectRegion from './SelectRegion'

import { AppContext } from '../App.provider'

const Search = () => {
  const { theme, region, regionList, setRegion, searchInput, setSearchInput } =
    useContext(AppContext)
  return (
    <div className={`search ${theme === 'light' ? 'light' : ''}`}>
      <SearchInput
        theme={theme}
        searchInput={searchInput}
        searchHandler={setSearchInput}
      />
      <SelectRegion
        theme={theme}
        selectedRegion={region}
        regionList={regionList}
        onSelect={setRegion}
        text='Filter by Region'
      />
    </div>
  )
}

export default Search
