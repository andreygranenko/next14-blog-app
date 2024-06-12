'use client';
import Links from "@/components/navbar/links/Links";
import styles from './navbar.module.css';
import Link from "next/link";
import {useState} from "react";
const Navbar = () => {
  const [open, setOpen] =  useState(false);

    return (
        <nav className={styles.container}>
          <Link
            href={'/'}
            className={styles.logo}
            onClick={() => setOpen(prevState => prevState ? !prevState : prevState)}
          >Logo</Link>
          <div>
            <Links open={open} setOpen={setOpen}/>
          </div>
        </nav>
    );
}

export default Navbar;