import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  
  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };
return(
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li>
          // <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
            {showSubMenu && l.subMenu && (
              <ul className="submenu">
                {l.subMenu.map((subItem) => (
                  <li key={subItem.label}>
                    <Link to={subItem.path}>{subItem.label}</Link>)
                  </li>)
              </ul>}
          </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);
                };

export default Navigation;
