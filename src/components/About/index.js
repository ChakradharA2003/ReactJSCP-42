// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme
        ? 'dark-about-container'
        : 'light-about-container'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const themeHeading = isDarkTheme ? 'dark-heading' : 'light-heading'
      return (
        <>
          <Navbar />
          <div className={theme}>
            <img src={themeImage} alt="about" className="image" />
            <h1 className={themeHeading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
