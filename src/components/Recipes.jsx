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

const Recipes = async () => {
  const data = await getData("https://dummyjson.com/recipes");

  return (
    <div className="p-2 flex flex-col gap-4">
       <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Recipes</h1>
      {data.recipes?.map((obj) => {
        return (
          <CardComponent key={obj.id} obj={obj} type={'recipes'}/>
          // <Card key={obj.id}>
          //   <CardHeader>
          //     <CardTitle className="flex flex-col items-center">
          //       <Image src={obj.image} width={100} height={30} className="rounded-xl" />
          //       <h2 className="m-2">
          //        {obj.name}
          //       </h2>
          //     </CardTitle>
          //     {/* <CardDescription>Card Description</CardDescription> */}
          //   </CardHeader>
          //   <CardContent>
          //     <p>rating: {obj.rating}</p>
          //     <p>views: {obj.reviewCount}</p>
          //   </CardContent>
          //   <CardFooter>
          //   <Button>
          //       <Link href={`/recipes/${obj.id}`}>More</Link>
          //     </Button>
          //   </CardFooter>
          // </Card>
        );
      })}
    </div>
  );
};

export default Recipes;
