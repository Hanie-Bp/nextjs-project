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
    <>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Recipes</h1>
      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data.recipes?.map((obj) => {
          return <CardComponent key={obj.id} obj={obj} type={"recipes"} />;
        })}
      </div>
    </>
  );
};

export default Recipes;
