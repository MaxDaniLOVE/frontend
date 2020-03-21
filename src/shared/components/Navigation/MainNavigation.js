import React, {useState} from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { Link } from 'react-router-dom';
import './MainNavigation.scss'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => setDrawerIsOpen(true);
  const closeDrawerHandler = () => setDrawerIsOpen(false)
  return (
    <React.Fragment>
      { drawerIsOpen ? <Backdrop onClick={closeDrawerHandler}/> : null }
      <SideDrawer show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks closeDrawerHandler={closeDrawerHandler}/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
