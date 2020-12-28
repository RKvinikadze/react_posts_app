/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar