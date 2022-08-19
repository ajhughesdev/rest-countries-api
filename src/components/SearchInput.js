const SearchInput = (props) => {
  return (
    <div className={`search-input ${props.theme === 'light' ? 'light' : ''}`}>
      <form>
        <input
          type='text'
          placeholder='Search for a country...'
          value={props.searchInput}
          onChange={(e) => props.searchHandler(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchInput
