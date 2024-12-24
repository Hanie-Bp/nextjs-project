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

const Posts = async () => {
  const data = await getData("https://dummyjson.com/posts");

  return (
    <div className="flex-1">
      {data.posts?.map((obj) => {
        return (
          <Card key={obj.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <h2>
                  {obj.title}
                </h2>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{obj.body}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;