import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
        <NavLink id='sign-up-button' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <div id='nav-bar'>
      <div
      onClick={goHome}
       id='nav-logo'></div>
    <ul id='nav-buttons'>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
