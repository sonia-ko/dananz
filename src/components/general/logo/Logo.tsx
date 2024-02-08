import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Image
        width={126}
        height={54}
        src="/general/logo.png"
        alt="Dananz"
        priority={false}
      />
    </Link>
  );
};

export default Logo;
