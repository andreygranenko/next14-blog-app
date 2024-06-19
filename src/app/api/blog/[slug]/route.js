import {Post} from "@/components/lib/models";
import {connectToDb} from "@/components/lib/utils";
import {NextResponse} from "next/server";

export const GET = async (request, {params}) => {
  const {slug} = params;
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
  }
}