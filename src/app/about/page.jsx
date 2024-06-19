import styles from './about.module.css';
import Image from "next/image";

export const metadata = {
  title: 'About page',
  description: 'Next.js starter  about page description',
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.subTitle}>About Agency</h3>
        <h2 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto deleniti dolorem doloremque eveniet fugit hic ipsam labore mollitia ratione reiciendis, veniam voluptas. Accusamus autem natus numquam reprehenderit temporibus.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>100+</h2>
            <p>Projects completed</p>
          </div>
          <div className={styles.box}>
            <h2>50+</h2>
            <p>Happy clients</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt={'about'} fill className={styles.aboutImg}/>
      </div>
    </div>
  );
}

export default AboutPage;