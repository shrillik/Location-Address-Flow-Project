import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onEnableLocation, onSearchManually }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Enable Location Permission</h2>
        <p>We need your location to proceed with delivery.</p>
        <div className="modal-buttons">
          <button className="button" onClick={onEnableLocation}>
            Enable Location
          </button>
          <button className="button" onClick={onSearchManually}>
            Search Manually
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
