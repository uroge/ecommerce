import React from 'react';

import './Modal.scss';

const Modal = (props) => {

    return (
    <div className="modal">
        <div className="modal__content">
            You purchase was successful
            <button className="modal__btn" onClick={props.modalClosed}>&times;</button>
        </div>
    </div>
    );
};

export default Modal;