import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.scss'

const NavLinks = ({closeDrawerHandler}) => {
  const links = [
    {
      link: '/',
      label: 'All users'
    },
    {
      link: '/u1/places',
      label: 'My places'
    },
    {
      link: '/places/new',
      label: 'New place'
    },
    {
      link: '/auth',
      label: 'Auth'
    }
  ]
  return (
    <ul className="nav-links">
      {
        links.map(({link, label}) => 
          <NavLink to={link}
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "#fff"
            }}
            key={link}
            onClick={closeDrawerHandler}
          >
            {label}
          </NavLink>
        )
      }
    </ul>
  );
}

export default NavLinks;
