import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return <>
<header className="header">
  <div className="logo">
    <a href="/">ShopEase</a>
  </div>

  <nav className="navbar">
    <ul className="nav-links">
      <li>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <i className="fa-solid fa-circle-info"></i> About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <i className="fa-solid fa-envelope"></i> Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies">
          <i className="fa-solid fa-film"></i> Movies
        </NavLink>
      </li>
    </ul>
  </nav>

  <div className="header-icons">
    <a href="/cart">
      <i className="fa-solid fa-cart-shopping"></i>
    </a>
    <a href="/account">
      <i className="fa-solid fa-user"></i>
    </a>

    <div className="auth-links">
      <NavLink to="/signin" className="signin-btn">
        Sign In
      </NavLink>
      <NavLink to="/signup" className="signup-btn">
        Sign Up
      </NavLink>
    </div>
  </div>
</header>
    </>
}