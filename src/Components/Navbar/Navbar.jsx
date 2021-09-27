import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logout } from './../../Redux/auth/authActions';

const Navbar = ({ user, logout }) => {
  return (
    <div className='navbar'>
      <div className='logo'></div>
      <div className='nav-items'>
        {user._id ? (
          <Link to='/dashboard'>
            <h3>Dashboard</h3>
          </Link>
        ) : (
          <Link to='/auth'>
            <h3>Login</h3>
          </Link>
        )}
        {user._id && <button onClick={logout}>logout</button>}
      </div>
    </div>
  );
};

var mapState = (state) => ({
  user: state?.auth,
});

var actions = {
  logout,
};

export default connect(mapState, actions)(Navbar);
