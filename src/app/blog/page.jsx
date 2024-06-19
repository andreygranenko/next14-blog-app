import styles from './blog.module.css';
import PostCard from "@/components/postCard/postCard";
import {getPosts} from "@/components/lib/data";

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/blog');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
const BlogPage = async () => {


  // with an api
  const posts = await getData();

  // with a local file
  // const posts = await getPosts();


  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard key={post.id} id={post.id} post={post} title={post.title} body={post.body}/>
        </div>
      ))}
      {/*<div className={styles.post}>*/}
      {/*  <PostCard/>*/}
      {/*</div>*/}
      {/*<div className={styles.post}>*/}
      {/*  <PostCard/>*/}
      {/*</div>*/}
      {/*<div className={styles.post}>*/}
      {/*  <PostCard/>*/}
      {/*</div>*/}
      {/*<div className={styles.post}>*/}
      {/*  <PostCard/>*/}
      {/*</div>*/}

    </div>
  );

}

export default BlogPage;