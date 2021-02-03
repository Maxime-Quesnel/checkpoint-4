import React, { useState } from 'react';

import './Navbar.scss';
import Logo from '../../../assets/Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='navbar__globalContainer'>
        <img className='navbar__logo' src={Logo} alt='logo-maax-code' />
        <div className='navbar__containerOptions'>
          <a className='navbar__option' href='home'>
            Home
          </a>
          <a className='navbar__option' href='/about'>
            About
          </a>
          <a className='navbar__option' href='/skills'>
            Skills
          </a>
          <a className='navbar__option' href='/testimonial'>
            Testimonial
          </a>
        </div>
        <button type='button' className='navbar__btnContactMe'>
          Contact me
        </button>
      </div>
      <div className='navMobile__globalContainer'>
        <img className='navMobile__logo' src={Logo} alt='logo-maax-code' />
        <button
          style={{ marginRight: '10px' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <img
              style={{ height: '30px' }}
              src='http://simpleicon.com/wp-content/uploads/cross.png'
              alt='bars-menu-open'
            />
          ) : (
            <img
              style={{ height: '30px' }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
              alt='bars-menu-open'
            />
          )}
        </button>
        <nav
          className='navMobile__menuOpen'
          style={{
            transform: menuOpen ? `translateY(0)` : `translateY(-200%)`
          }}
        >
          <div className='navMobile__containerOptions'>
            <a className='navMobile__option' href='home'>
              Home
            </a>
            <a className='navMobile__option' href='/about'>
              About
            </a>
            <a className='navMobile__option' href='/skills'>
              Skills
            </a>
            <a className='navMobile__option' href='/testimonial'>
              Testimonial
            </a>
            <button type='button' className='navbar__btnContactMe'>
              Contact me
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;