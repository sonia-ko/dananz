import React, { useState } from "react";
import ArrowHalf from "../icons/ArrowHalf";
import Ellipse from "../icons/Ellipse";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTikTok from "../icons/IconTiktok";
import IconYoutube from "../icons/IconYoutube";

import classes from "./SocialIconsContainer.module.css";

const SocialIconsContainer: React.FC = () => {
  return (
    <div className={classes.container}>
      <p>Follow us On</p>
      <div className={classes.iconContainer}>
        <IconFacebook />
        <IconInstagram />
        <IconTikTok />
        <IconYoutube />
      </div>
    </div>
  );
};

export default SocialIconsContainer;
