import { useState } from 'react'

const SelectRegion = ({
  text,
  regionList,
  onSelect,
  selectedRegion,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSelect = (region) => {
    toggleDropDown()
    onSelect(region)
  }
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`dropdown ${theme === 'light' ? 'light' : ''}`}>
      <div className='click-area' onClick={toggleDropDown}>
        <span>{selectedRegion || text}</span>
        {isOpen ? (
          <svg
            className='close'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z'
              fill='currentColor'
            />
          </svg>
        ) : (
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z'
              fill='currentColor'
            />
          </svg>
        )}
      </div>
      <ul className={isOpen ? 'open' : ''}>
        {selectedRegion && <li onClick={() => handleSelect('')}>{text}</li>}
        {regionList.map((region) => (
          <li
            key={region}
            className={region === selectedRegion ? 'selected' : ''}
            onClick={() => handleSelect(region)}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectRegion
