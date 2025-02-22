import React from 'react';
import './btn.css';

const PrimaryBtn = ({ text, icon, onClick }) => {
  return (
    <div className="fancy-btn-container">
      <button className="fancy-btn" onClick={onClick}>
        {icon && <span className="icon">{icon}</span>}
        {text && <span className="text">{text}</span>}
      </button>
    </div>
  );
};

export default PrimaryBtn;
