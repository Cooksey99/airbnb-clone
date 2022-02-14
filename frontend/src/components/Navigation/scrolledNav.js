import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

export function ScrolledNavigation() {

    return (
       <>
       <nav className='sticky-bar'>
        <NavLink exact to="/" id='left-nav' style={{color: 'white'}}>Airunme</NavLink>
        <input type='search' placeholder='Start your search'></input>
       </nav>
       </>
    )
}
