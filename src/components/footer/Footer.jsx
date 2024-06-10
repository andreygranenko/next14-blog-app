import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        © 2021 Blog App
      </div>
    </footer>
  );
}

export default Footer;