import { useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import { AppContext } from '../../App.provider'
import './Header.scss'

const Header = () => {
  const { theme, switchTheme } = useContext(AppContext)

  return (
    <header className={`header ${theme === 'dark' ? 'dark' : ''}`}>
      <h1>
        <Link to='/'>Where in the world?</Link>
      </h1>
      <ThemeSwitcher theme={theme} switchTheme={switchTheme} />
    </header>
  )
}

export default Header
