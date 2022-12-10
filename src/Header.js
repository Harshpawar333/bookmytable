import logo from './logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import './Order'

function Header() {
  return (
    <body>
      <div className="App">
        <header className="header">
          <ul className="navbars">
            <div className="logoName col-sm-3">
              <img className="logoo" src={logo} alt="Logo" />

              <h3>House of Bamboo</h3>
            </div>
            <div className="col-sm-9 d-flex ">
              <li className="col-sm">
                <Link className="headerOrder" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="col-sm">
                <Link className="headerOrder" to="/order">
                  Orders
                </Link>
              </li>
              <li className="col-sm">
                <Link className="headerOrder" to="/">
                  Menu
                </Link>
              </li>
              <li className="col-sm">
                <Link className="headerOrder" to="/inventory">
                  Inventory
                </Link>
              </li>
            </div>
          </ul>
        </header>
      </div>
    </body>
  )
}

export default Header
