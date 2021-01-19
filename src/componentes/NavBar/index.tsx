import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper indigo">
          <Link to="/" className="brand-logo">App Materialize</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/budgets">Budgets</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/financial">Financial</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
