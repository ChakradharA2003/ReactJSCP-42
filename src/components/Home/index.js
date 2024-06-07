// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark-home-container' : 'light-home-container'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const themeHeading = isDarkTheme ? 'dark-heading' : 'light-heading'
      return (
        <>
          <Navbar />
          <div className={theme}>
            <img src={themeImage} alt="home" className="image" />
            <h1 className={themeHeading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
