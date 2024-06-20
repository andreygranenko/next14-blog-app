import {Post} from "@/components/lib/models";
import {connectToDb} from "@/components/lib/utils";
import {NextResponse} from "next/server";

export const GET = async (request, {params}) => {
  const {slug} = params;
  try {
    await connectToDb();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
  }
}

export const DELETE = async (request, {params}) => {
  const {slug} = params;
  try {
    await connectToDb();
    await Post.findOneAndDelete({slug});
    return NextResponse.json({message: 'Post deleted'});
  } catch (e) {
    console.log(e);
  }
}