import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

interface menuItem {
  text: string;
  href: string;
}

const menuItems: menuItem[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {
        menuItems.map(item => (
          <ActiveLink key={item.text} href={item.href} text={item.text} />
        ))
      }
    </nav>
  );
};
