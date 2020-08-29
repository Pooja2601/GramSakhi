import React, {Component} from 'react';
import '../App.css'

const Modal = ({ handleClose, show, children, props }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
                   {children}
                   {console.log(props)}
          <button type="button" className="btn btn-custom btn-lg" onClick={handleClose} style={{background:'linear-gradient(to right, #9D376E 0%, #F4ADCD 100%)'}}>Close</button>
        </section>
      </div>
    );
  };
  export default Modal;