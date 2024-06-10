"use client";
import styles from './links.module.css'
import NavLink from "@/components/navbar/links/navLink/navLink";
import {useState} from "react";
const Links = () => {
  const [open, setOpen] =  useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink key={index} item={link}/>
        ))}
        {session ? (
          <>
            {isAdmin && (<NavLink item={{title: "Admin", path: '/admin'}}/>)}
            <button className={styles.logout}>Logout</button>
          </>

        ) : (
          <NavLink item={{title: "Login", path: '/login'}}/>
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prevState => !prevState)}> Menu</button>
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link}/>
            ))}
        </div>
      }
    </div>

  )
}

export default Links;