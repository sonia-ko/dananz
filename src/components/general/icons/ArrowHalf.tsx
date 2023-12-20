import React from "react";
import classes from "./Icons.module.css";

interface ArrowLeftProps {
  onClick: () => void;
}

const ArrowHalf: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        width="26"
        height="12"
        viewBox="0 0 26 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 10.2479H23.5L16 1.23633" stroke="#141414" strokeWidth="2" />
      </svg>
    </button>
  );
};

export default ArrowHalf;
