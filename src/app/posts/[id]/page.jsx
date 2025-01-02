import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getData } from "@/utils/actions";
// import getData from "@/utils/actions";
import Link from "next/link";
import React from "react";

const postCard = async ({ params }) => {
const data = await getData(`http://localhost:3000/api/v1/posts/${params.id}`);
  const [post] = data;
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
              <span>Likes:</span> {post.likes}
            </li>
            <li>
              <span>Dislikes:</span> {post.dislikes}
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
