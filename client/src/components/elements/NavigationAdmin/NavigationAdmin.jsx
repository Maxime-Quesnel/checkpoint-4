import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaNewspaper, FaDoorClosed } from 'react-icons/fa';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth.action';
import './NavigationAdmin.scss';

const NavigationDashboard = ({ logoutUser }) => {
  return (
    <div className='navDashboard__globalContainer'>
      <div className='navDashboard__menuContainer'>
        <Link style={{ textDecoration: 'none' }} to='/dashboard'>
          <div className='navDashboard__itemNav'>
            <FaUserAlt value={{ size: '2em', color: 'white' }} />
            <p className='navDashboard__textNav'>Add new client</p>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/dashboard/update'>
          <div className='navDashboard__itemNav'>
            <FaNewspaper value={{ size: '2em', color: 'white' }} />
            <p className='navDashboard__textNav'>Modify profile</p>
          </div>
        </Link>
        <div
          className='navDashboard__itemNavDeco'
          onClick={() => {
            logoutUser();
          }}
        >
          <FaDoorClosed value={{ size: '2em', color: 'white' }} />
          <p className='navDashboard__textNav'>DECONNEXION</p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logoutUser })(NavigationDashboard);
