import React from "react";
import classes from "./TeamMemberBlock.module.css";
import Link from "next/link";
import Image from "next/image";

interface TeamMemberBlockProps {
  imgSrc: string;
  title: string;
  employeeName: string;
}

const TeamMemberBlock: React.FC<TeamMemberBlockProps> = ({
  imgSrc,
  title,
  employeeName,
}) => {
  return (
    <li className={classes.container}>
      <Image
        className={classes.image}
        width="282"
        height="386"
        src={imgSrc}
        alt={employeeName}
        layout="responsive"
        priority={false}
      />
      <div className={classes.textContainer}>
        <p className="text-size-m text-semibold">{employeeName}</p>
        <p className="text-gray">{title}</p>
      </div>
    </li>
  );
};

export default TeamMemberBlock;
