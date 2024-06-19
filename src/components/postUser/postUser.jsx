import styles from "./postuser.module.css";
import {getUser} from "@/components/lib/data";
import Image from "next/image";

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
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'}
        width={50}
        height={50}
        alt={'post'} />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>

    </div>
  )
}

export default PostUser;