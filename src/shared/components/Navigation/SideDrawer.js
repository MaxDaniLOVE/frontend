import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.scss'

const SideDrawer = (props) => {
  const content = 
  <CSSTransition in={props.show} timeout={150} classNames="slide-in-left" mountOnEnter unmountOnExit>
    <aside className="side-drawer">
      {props.children}
    </aside>
  </CSSTransition>
  
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer;
