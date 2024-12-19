import React from 'react'
import s from './Modal.module.css'

const Modal = ({message, onClose}) => {
  return (
    <div className={s.overlay}>
        <div className={s.content}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal