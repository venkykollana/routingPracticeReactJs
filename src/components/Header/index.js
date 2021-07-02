// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="headerContainer">
    <div className="logoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveLogo"
      />
      <h1 className="logoName">Wave</h1>
    </div>
    <ul className="navItems">
      <li>
        <Link to="/" className="linkItem">
          Home
        </Link>
        <li>
          <Link to="/about" className="linkItem">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="linkItem">
            Contact
          </Link>
        </li>
      </li>
    </ul>
  </nav>
)

export default Header
