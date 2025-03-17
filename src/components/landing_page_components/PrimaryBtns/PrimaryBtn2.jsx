import React from 'react';
import './btn.css';
import { MdArrowForward } from "react-icons/md";

const PrimaryBtn2 = ({ text, icon, onClick }) => {
  return (
    <div className="fancy-btn-container">
      <button className="fancy-btn2 flex items-center justify-between gap-2" onClick={onClick}>
        {icon && <span className="icon">{icon}</span>}
        {text && <span className="text">{text}</span>}
        <div className="ml-0 -mr-2 relative -right-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
          <MdArrowForward />
        </div>
      </button>
    </div>
  );
};

export default PrimaryBtn2;
