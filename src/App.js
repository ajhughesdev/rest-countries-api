import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import AllCountries from './pages/AllCountries'
import CountryDetails from './pages/CountryDetails'
import Header from './components/Header'

import { AppContext } from './App.provider'

import './styles/App.scss'

const App = () => {
  const { theme } = useContext(AppContext)

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <Routes>
        <Route exact path='/' element={<AllCountries />} />
        <Route exact path='/:countryCode' element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default App
