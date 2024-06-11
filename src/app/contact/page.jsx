import styles from './contact.module.css'
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/contact.png'} alt={'contact us'} fill className={styles.contactImg}/>
      </div>
      <form className={styles.formContainer}>
        <h3 className={styles.subTitle}>Contact Us</h3>
        <h2 className={styles.title}>We are here to help you</h2>
        <input type="text" placeholder="Name and Surname" className={styles.input}/>
        <input type="email" placeholder="Email adress" className={styles.input}/>
        <input type="number" placeholder="Phone number (Optional)" className={styles.input}/>
        <textarea placeholder="Your Message" className={styles.input}></textarea>
        <button className={styles.btn}>Send Message</button>

      </form>
    </div>
  );
}

export default ContactPage;