import React from 'react'

const Modal = ({ open, close, children}) => {
    if(!open) return null;
    return (
        <>
            <button className="modal__overlay" aria-label="close" onClick={() => close()}></button>
            <form className="modal__form">
                {children}
            </form>
        </>
    )
}

export default Modal
