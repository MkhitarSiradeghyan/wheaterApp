import React from "react";
import s from "./Modal.module.css";
import { toCapitalCase } from "../../utils/toCapitalCase";

const Modal = ({ message, onClose }) => {
  return (
    <div className={s.modalBackdrop}>
      <div className={s.modalContent}>
        <p>{toCapitalCase(message)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
