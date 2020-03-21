import React, {useState} from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { Link } from 'react-router-dom';
import './MainNavigation.scss'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <React.Fragment>
      {
        drawerIsOpen
          ? <SideDrawer>
            <Backdrop onClick={() => setDrawerIsOpen(false)}/>
            <nav className="main-navigation__drawer-nav">
              <NavLinks />
            </nav>
          </SideDrawer>
          : null
      }
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={() => setDrawerIsOpen(true)}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
