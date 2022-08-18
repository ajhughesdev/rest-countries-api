import { createContext, useState } from 'react'

export const AppContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
  countries: [],
  setCountries: () => {},
})

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])

  const switchTheme = () => setTheme(theme === 'light' ? '' : 'light')

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        countries,
        setCountries,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
