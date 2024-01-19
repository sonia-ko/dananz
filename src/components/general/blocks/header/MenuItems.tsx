import React from "react";
import classes from "./MenuItems.module.css";
import Link from "next/link";
import Button from "../../button/button";
import { menuItems } from "@/static/websiteData";

import { useRouter } from "next/router";

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {menuItems.map((item) => {
            return (
              <li
                className={`${classes.li} ${
                  router.pathname === item.url && classes.active
                }`}
                key={item.title}
              >
                <Link
                  onClick={() => (document.body.style.overflow = "auto")}
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Button
        btnText="Contact Us"
        onClick={() => {
          document.body.style.overflow = "auto";
          router.push("/contact-us/");
        }}
        btnStyle="blue"
      />
    </>
  );
};

export default MenuItems;
