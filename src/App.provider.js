import { createContext, useState } from 'react'

// import {}

export const AppContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
  countries: [],
  setCountries: () => {},
})

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [countries, setCountries] = useState([])

  const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        countries,
        setCountries
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
