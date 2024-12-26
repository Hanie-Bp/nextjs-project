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
    <>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Posts</h1>
      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data.posts?.map((obj) => {
          return <CardComponent key={obj.id} obj={obj} type={"posts"} />;
        })}
      </div>
    </>
  );
};

export default Posts;
