import styles from './singlePost.module.css';
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import {Suspense} from "react";
import {getPost} from "@/components/lib/data";


const getData = async (param) => {
  const response = await fetch(`http://localhost:3000/api/blog/${param}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
export const generateMetadata = async ({params}) => {

  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc
  };

}

const SinglePostPage = async ({params}) => {

  const post = await getData(params.slug);

  // const post = await getPost(params.[slug]);

  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image className={styles.img}
               src={post.img}
               alt={'post'} fill/>
      </div>}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.detail}>

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>

          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publisher</span>
            <span className={styles.detailValue}>{post.createdAt && post.createdAt}</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;