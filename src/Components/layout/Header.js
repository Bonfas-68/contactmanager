import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="#" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="icon">🏠</span>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <span className="icon">➕</span>Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span className="icon">❔</span>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My app',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
// React styling
const headingStyles = {
  color: 'blue',
  fontSize: '3.5rem',
};
export default Header;
