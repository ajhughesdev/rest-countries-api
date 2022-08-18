import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import AllCountries from './pages/AllCountries'
import CountryDetails from './pages/CountryDetails'
import Header from './components/Header'

import { getCountries } from './utilities'
import { AppContext } from './App.provider'

import './styles/App.scss'

const App = () => {
  const { theme, setCountries } = useContext(AppContext)

  useEffect(() => {
    getCountries().then(({ data }) => {
      setCountries(data)
    })
  }, [setCountries])

  return (
    <div className={`app ${theme === 'light' ? 'light' : ''}`}>
      <Header />
      <Routes>
        <Route exact path='/' element={<AllCountries />} />
        <Route exact path='/:countryCode' element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default App
