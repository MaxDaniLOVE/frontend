import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import './Modal.scss';

const ModalOverlay = (props) => {
  const {headerClass, style, header, onSubmit, contentClass, footerClass, modalClass, footer} = props;
  const content = (
    <div className={`modal ${modalClass}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : e => e.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${footerClass}`}>
          {footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = (props) => {
  const {show, onCancel} = props
  return <React.Fragment>
    {
      show && <Backdrop onClick={onCancel}/>
    }
    <CSSTransition in={show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
      <ModalOverlay {...props} />
    </CSSTransition>
  </React.Fragment>
}

export default Modal;
