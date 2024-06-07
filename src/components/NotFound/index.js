// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme
        ? 'dark-notfound-container'
        : 'light-notfound-container'
      const themeContent = isDarkTheme ? 'dark-content' : 'light-content'
      return (
        <>
          <Navbar />
          <div className={theme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className={themeContent}>Lost Your Way?</h1>
            <p className={themeContent}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
