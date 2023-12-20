import React from "react";
import classes from "./Icons.module.css";

interface ArrowLeftProps {
  onClick: () => void;
}

const Ellipse: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="7" cy="7.18237" rx="7" ry="7.00879" fill="#333333" />
      </svg>
    </button>
  );
};

export default Ellipse;
