'use server';

import {connectToDb} from "@/components/lib/utils";
import {Post} from "@/components/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/components/lib/auth";

export const addPost = async (formData) => {

  // const title = formData.get('title');
  // const desc = formData.get('desc');
  // const [slug] = formData.get('[slug]');
  // const userId = formData.get('userId');

  const {title, desc, slug, userId} = Object.fromEntries(formData);


  try {
   connectToDb();
   const newPost = new Post({title, desc, slug, userId});

   await newPost.save();
   console.log('saved to db')
   revalidatePath('/blog')
  } catch (e) {
    console.log(e);
  }

}

export const deletePost = async (formData) => {

  const {id} = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log('deleted from db')
    revalidatePath('/blog')
  } catch (e) {
    console.log(e);
  }
}

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github')
}

export const handleLogout = async () => {
  'use server';
  await signOut()
}