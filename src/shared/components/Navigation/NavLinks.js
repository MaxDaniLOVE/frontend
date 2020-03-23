import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import Button from '../FormElements/Button';
import './NavLinks.scss'

const NavLinks = ({closeDrawerHandler}) => {
  const auth = useContext(AuthContext);
  console.log(auth)
  return (
    <ul className="nav-links">
      <NavLink to='/'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
        onClick={closeDrawerHandler}
      >
        All users
      </NavLink>
      {auth.isLoggedIn && (<NavLink to='/u1/places'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
        onClick={closeDrawerHandler}
      >
        My places
      </NavLink>)}
      {auth.isLoggedIn && (<NavLink to='/places/new'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
        onClick={closeDrawerHandler}
      >
        New place
      </NavLink>)}
      {!auth.isLoggedIn && (<NavLink to='/auth'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
        onClick={closeDrawerHandler}
      >
        Auth
      </NavLink>)}
      {auth.isLoggedIn && (
        <li>
          <Button className="outline-warning" onClick={auth.logout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
