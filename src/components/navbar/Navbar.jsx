import Links from "@/components/navbar/links/Links";
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <nav className={styles.container}>
          <div className={styles.logo}>Logo</div>
          <div>
            <Links/>
          </div>
        </nav>
    );
}

export default Navbar;