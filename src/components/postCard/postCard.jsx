import styles from './postCards.module.css';
import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={'https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={'avatar'} fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.02.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>title</h2>
        <p className={styles.desc}>Desc</p>
        <Link className={styles.link} href={'/blog/post'}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;