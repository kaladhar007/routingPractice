import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navBar">
    <div className="img_and_para_div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveImg"
      />
      <p className="wavePara">wave</p>
    </div>
    <div className="li_container">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
)
export default Header
