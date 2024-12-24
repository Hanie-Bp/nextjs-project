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

const Recipes = async () => {
  const data = await getData("https://dummyjson.com/recipes");

  return (
    <div className="bg-gray-200 ">
      {data.recipes?.map((obj) => {
        return (
          <Card key={obj.id}>
            <CardHeader>
              <CardTitle className="flex flex-col items-center">
                <Image src={obj.image} width={100} height={30} className="rounded-xl" />
                <h2 className="m-2">
                 {obj.name}
                </h2>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>rating: {obj.rating}</p>
              <p>views: {obj.reviewCount}</p>
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

export default Recipes;
