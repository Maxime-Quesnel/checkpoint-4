import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Navbar.scss';
import Logo from '../../../assets/Logo.png';

function Navbar({ auth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='navbar__globalContainer'>
        <img className='navbar__logo' src={Logo} alt='logo-maax-code' />
        <div className='navbar__containerOptions'>
          <a className='navbar__option' href='/'>
            Home
          </a>
          <a className='navbar__option' href='#about'>
            About
          </a>
          <a className='navbar__option' href='#client'>
            Client
          </a>
          <a className='navbar__option' href='#project'>
            Projects
          </a>
          <a className='navbar__option' href='#testimonial'>
            Testimonial
          </a>
          {auth.isAuthenticated ? (
            <a className='navbar__option' href='/dashboard'>
              Dashboard
            </a>
          ) : null}
        </div>
        <button
          onClick={() => (window.location.href = '/login')}
          type='button'
          className='navbar__btnContactMe'
        >
          Connexion admin
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
            <a className='navMobile__option' href='/'>
              Home
            </a>
            <a className='navMobile__option' href='#about'>
              About
            </a>
            <a className='navMobile__option' href='#client'>
              Client
            </a>
            <a className='navMobile__option' href='#project'>
              Projects
            </a>
            <a className='navMobile__option' href='#testimonial'>
              Testimonial
            </a>
            {auth.isAuthenticated ? (
              <a className='navbar__option' href='/dashboard'>
                Dashboard
              </a>
            ) : null}
            <button
              onClick={() => (window.location.href = '/login')}
              type='button'
              className='navbar__btnContactMe'
            >
              Connexion admin
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
