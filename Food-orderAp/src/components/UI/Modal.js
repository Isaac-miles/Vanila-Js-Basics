import classes from './Modal.module.css'
import {Fragment} from 'react';
import ReactDom from 'react-dom';

const Backdrop = props =>{
    return <div className={classes.backdrop} onClick ={props.onClose}></div>
};

const ModalOverlay = props =>{
return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
 </div> 
};

const portalELement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
    {  ReactDom.createPortal(<Backdrop onClose ={props.onClose}/>, portalELement )  }
    { ReactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalELement )}
    </Fragment>
  )
}

export default Modal