import {connectToDb} from "@/components/lib/utils";
import {NextResponse} from "next/server";
import {Post} from "@/components/lib/models";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (e) {
    console.log(e);
  }
}