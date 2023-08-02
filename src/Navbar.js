import React, { useState, useEffect } from 'react';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRULIFE
            <i class='fab fa-typo3' />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/services'
                className='nav-links'
                
              >
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/destination'
                className='nav-links'
                
              >
                Destination
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/signup'
                className='nav-links-mobile'
                
              >
                SignUp
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;