"use client";
import styles from './links.module.css'
import NavLink from "@/components/navbar/links/navLink/navLink";
import Image from "next/image";
import {handleLogout} from "@/components/lib/actions";
import {auth} from "@/components/lib/auth";
const Links = async ({open, setOpen}) => {
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
  const session = await auth();
  // console.log(session);
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink key={index} item={link}/>
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && (<NavLink item={{title: "Admin", path: '/admin'}}/>)}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>

        ) : (
          <NavLink item={{title: "Login", path: '/login'}}/>
        )}
      </div>
      <Image className={styles.menuButton} src={'/menu.png'} alt={'burger button'} width={30} height={30} onClick={() => setOpen(prevState => !prevState)}/>
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