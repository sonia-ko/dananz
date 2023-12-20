import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <>
      <Link href="/">
        <Image
          width={126}
          height={54}
          src="/general/logo.png"
          alt="Dananz"
          priority={false}
        />
      </Link>
    </>
  );
};

export default Logo;
