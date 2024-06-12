import styles from './blog.module.css';
import PostCard from "@/components/postCard/postCard";

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
const BlogPage = async () => {

  const posts = await getData();


  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body}/>
        </div>
      ))}
      <div className={styles.post}>
        <PostCard/>
      </div>
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