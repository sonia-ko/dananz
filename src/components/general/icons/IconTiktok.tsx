import React from "react";
import classes from "./Icons.module.css";

const IconTikTok: React.FC = () => {
  return (
    <button type="button" className={classes.social}>
      <a target="_blank" href="https://tiktok.com/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1154 6.00894C17.0381 5.30651 16.2605 4.18262 16.018 2.87246C15.9656 2.5894 15.9368 2.29807 15.9368 2H12.4984L12.4929 15.78C12.435 17.3231 11.165 18.5616 9.60804 18.5616C9.12413 18.5616 8.66848 18.4406 8.26729 18.2295C7.3473 17.7454 6.71771 16.781 6.71771 15.6713C6.71771 14.0775 8.01437 12.7808 9.60804 12.7808C9.90553 12.7808 10.1909 12.8299 10.4609 12.9145V9.40424C10.1815 9.3662 9.89765 9.34242 9.60804 9.34242C6.11829 9.34242 3.2793 12.1816 3.2793 15.6713C3.2793 17.8124 4.34905 19.7072 5.98108 20.853C7.00906 21.5747 8.25948 22 9.60804 22C13.0978 22 15.9368 19.161 15.9368 15.6713V8.68367C17.2854 9.65161 18.9376 10.222 20.7205 10.222V6.7836C19.7601 6.7836 18.8656 6.49808 18.1154 6.00894Z"
            fill="black"
          />
        </svg>
      </a>
    </button>
  );
};

export default IconTikTok;
