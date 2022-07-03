import React from "react";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

const navItems = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place",
  },
  {
    icon: "person",
    link: "/profile",
  },
];

const Footer = () => {
  const { push, pathname } = useRouter();

  return (
    <footer className={styles.footer}>
      <nav>
        {navItems.map((item) => (
          <button
            className={pathname === item.link ? styles.active : ""}
            onClick={() => push(item.link)}
            key={item.icon}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
