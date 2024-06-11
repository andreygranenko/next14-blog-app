import styles from './singlePost.module.css';
import Image from "next/image";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={'https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={'post'} fill/>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Title</h2>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src={'https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            width={50}
            height={50}
            alt={'post'} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Granenko</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publisher</span>
            <span className={styles.detailValue}>19.04.2006</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis, id ipsam natus nulla quae quos soluta? A at eius ex inventore laboriosam, natus quo reiciendis voluptatem. Eveniet expedita, nam!</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;