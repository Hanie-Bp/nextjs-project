import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getData from "@/utils/actions";
import Link from "next/link";
import React from "react";

const postCard = async ({ params }) => {
  const post = await getData(`https://dummyjson.com/posts/${params.id}`);
  console.log(post);
  return (
    <div className="flex justify-center items-center h-[90vh] p-4">
      <Card className="bg-slate-200 w-full max-w-3xl my-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <h2 className="text-cyan-900 text-2xl">{post.title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="my-4">{post.body}</p>
          <ul>
            <li>
              <span>Likes:</span> {post.reactions.likes}
            </li>
            <li>
              <span>Dislikes:</span> {post.reactions.dislikes}
            </li>
            <li>
              <span>Views:</span> {post.views}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/posts">
            <Button>Back</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default postCard;
