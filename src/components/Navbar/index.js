// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }
      const navThemeBackGround = isDarkTheme ? 'dark-nav-bg' : 'light-nav-bg'
      const navWebsiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navThemeChangeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navThemeLinkItems = isDarkTheme
        ? 'dark-link-element'
        : 'light-link-element'
      return (
        <div className={navThemeBackGround}>
          <img src={navWebsiteLogo} alt="website logo" className="nav-image" />
          <ul className="link-items">
            <li>
              <Link to="/" className={navThemeLinkItems}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navThemeLinkItems}>
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="theme-btn"
            onClick={onChangeTheme}
          >
            <img src={navThemeChangeImage} alt="theme" className="nav-image" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
