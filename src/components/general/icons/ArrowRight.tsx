import React from "react";
import classes from "./Icons.module.css";

interface ArrowLeftProps {
  onClick: () => void;
}

const ArrowRight: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66699 16H25.3337"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 6.66666L25.3333 16L16 25.3333"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default ArrowRight;
