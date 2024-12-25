import getData from "@/utils/actions";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import CardComponent from "./CardComponent";

const Posts = async () => {
  const data = await getData("https://dummyjson.com/posts");

  return (
    <div className="flex-1 p-2 flex flex-col gap-4">
       <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Posts</h1>
      {data.posts?.map((obj) => {
        return (
          <CardComponent key={obj.id} obj={obj} type={'posts'}/>
          // <Card key={obj.id}>
          //   <CardHeader>
          //     <CardTitle className="flex items-center">
          //       <h2>
          //         {obj.title}
          //       </h2>
          //     </CardTitle>
          //     {/* <CardDescription>Card Description</CardDescription> */}
          //   </CardHeader>
          //   <CardContent>
          //     <p>{obj.body}</p>
          //   </CardContent>
          //   <CardFooter>
          //   <Button>
          //       <Link href={`/posts/${obj.id}`}>More</Link>
          //     </Button>
          //   </CardFooter>
          // </Card>
        );
      })}
    </div>
  );
};

export default Posts;