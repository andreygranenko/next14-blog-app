import styles from './singlePost.module.css';
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import {Suspense} from "react";
import {getPost} from "@/components/lib/data";


// const getData = async (param) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${param}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }
const SinglePostPage = async ({params}) => {

  // const post = await getData(params.slug);

  const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={'https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={'post'} fill/>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src={'https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            width={50}
            height={50}
            alt={'post'} />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>

          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publisher</span>
            <span className={styles.detailValue}>19.04.2006</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;