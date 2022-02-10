// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <div>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav id='nav-bar'>
      <NavLink exact to="/">Airunme</NavLink>
      <NavLink exact to="/spots">Places to stay</NavLink>
      <NavLink exact to="/spots/create">Host</NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
