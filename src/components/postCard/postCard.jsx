import styles from './postCards.module.css';
import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post, id}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt={'avatar'} fill className={styles.img}/>
        </div>}
        <span className={styles.date}>01.02.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;