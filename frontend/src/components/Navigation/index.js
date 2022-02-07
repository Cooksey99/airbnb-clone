import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginForm';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const goHome = e => {
      return <Redirect exact to='/'/>
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='signup-button' to="/signup">Sign Up</NavLink>
      </>
    );
  }
  // if true, show login tools
  let showLogin = false;

  return (
      <div id='nav-bar'>
      <div
      onClick={goHome}
       id='nav-logo'></div>
    <button id='nav-right'
    onClick={!showLogin}
    >
      <div>
        {isLoaded && sessionLinks}
      </div>
    </button>
    </div>
  );
}

export default Navigation;
