import { useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeSwitcher from './ThemeSwitcher'

import { AppContext } from '../App.provider'

const Header = () => {
  const { theme, switchTheme } = useContext(AppContext)

  return (
    <div className={`header-container ${theme === 'light' ? 'light' : ''}`}>
      <header>
        <h1>
          <Link to='/'>Where in the world?</Link>
        </h1>
        <ThemeSwitcher theme={theme} switchTheme={switchTheme} />
      </header>
    </div>
  )
}

export default Header
