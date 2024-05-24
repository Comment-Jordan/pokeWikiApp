

// Modal.js
import React from 'react';

const Cargando = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Cargando;
