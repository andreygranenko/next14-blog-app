import styles from "@/app/blog/[slug]/singlePost.module.css";
import {getUser} from "@/components/lib/data";

// const getData = async (param) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`, {cache: "no-cache"});
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }

const PostUser = async ({   userId}) => {



  // console.log(userId);
  // const user = await getData(userId);

  const user = await getUser(userId);

  return (
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  )
}

export default PostUser;