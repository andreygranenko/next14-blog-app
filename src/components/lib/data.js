// temporary data

import {Post, User} from "@/components/lib/models";
import {connectToDb} from "@/components/lib/utils";
import {unstable_noStore as noStore} from "next/cache";


export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;


  } catch (e) {
    console.log(e);
  }
}

export const getPost = async (slug ) => {
  try {
    await connectToDb();
    const post = await Post.findOne({slug: slug});
    return post;
  } catch (e) {
    console.log(e);
  }

  // return posts.find(post => post.id === parseInt(id));
}

export const getUser = async (id) => {
  noStore();
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
  }

}

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
  }
}