// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import '../../logo'
import { ScrolledNavigation } from './scrolledNav';

function Navigation({ isLoaded }){

  // allows for a scroll effect on the search bar
  // const [scrollEffect, setScrollEffect] = useState(false)


  // const scrollEvent = () => {

  //   if (window.scrollY > 20) {
  //     console.log(scrollEffect)
  //     setScrollEffect(true)
  //   } else {
  //     setScrollEffect(false)
  //   }
  // };
  // // makes sure it only runs when intended
  // useEffect(() => {
  //   window.addEventListener('scroll', scrollEvent);

  //   // cleanup this component
  //   return () => {
  //     window.removeEventListener('scroll', scrollEvent);
  //   };
  // }, []);

  const sessionUser = useSelector(state => state.session.user);



  const [color, setColor] = useState({color: 'black'});



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/spots/create" id='host-tab' style={{color: 'white'}} >Host</NavLink>
        <ProfileButton user={sessionUser}/>
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
    <>
    {/* <section className='sticky-bar'> */}
    {/* {!scrollEffect && ( */}
      <nav id='noScroll-nav'>
      <NavLink exact to="/" id='left-nav' style={{color: 'white'}}>
        Airuandme
        {/* <img src='../../logo/Airuandme-logos_white.png' alt=''></img> */}
      </NavLink>
      <NavLink exact to="/spots" style={{color: 'white'}}>Places to stay</NavLink>
      <div id='right-nav'>
        {isLoaded && sessionLinks}
      </div>
    </nav>
    {/* )} */}
    {/* </section> */}
    </>
  );
}

// {scrollEffect && (
//   // <>
//   //   <NavLink exact to="/" id='left-nav'>Airunme</NavLink>
//   //   <input type='search' className='search-bar' placeholder='Start your search'></input>
//   //   {/* <ScrolledNavigation /> */}
//   //   {/* {isLoaded && sessionLinks} */}
//   // </>

//   )}
export default Navigation;
