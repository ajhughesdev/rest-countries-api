import { createContext, useState } from 'react'

export const AppContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
})

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
