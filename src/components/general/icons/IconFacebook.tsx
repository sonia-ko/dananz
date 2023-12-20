import React from "react";
import classes from "./Icons.module.css";

const IconFacebook: React.FC = () => {
  return (
    <svg
      className={classes.iconSocial}
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7912_815)">
        <path d="M2.36364 0C1.07073 0 0 1.07073 0 2.36364V23.6364C0 24.9293 1.07073 26 2.36364 26H23.6364C24.9293 26 26 24.9293 26 23.6364V2.36364C26 1.07073 24.9293 0 23.6364 0H2.36364ZM2.36364 2.36364H23.6364V23.6364H17.5051V15.6591H20.5707L21.0139 12.1136H17.5063V9.82327C17.5063 8.79036 17.7592 8.08836 19.2412 8.08836H21.1616V4.875C20.8343 4.83364 19.6985 4.76391 18.3926 4.76391C15.6685 4.76391 13.8131 6.40309 13.8131 9.45455V12.1136H10.7108V15.6591H13.8119V23.6364H2.36364V2.36364Z" />
      </g>
      <defs>
        <clipPath id="clip0_7912_815">
          <rect width="26" height="26" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconFacebook;
 