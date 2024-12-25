"use client";
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
import { useRouter } from "next/navigation";
const CardComponent = ({ obj, type }) => {
  const router = useRouter();
  const cardName = obj.name || obj.title || obj.firstName + " " + obj.lastName;
  const description = obj.body || obj.email;
  const rating = obj.rating;
  const views = obj.reviewCount;

  const handleClick = () => {
    router.push(`/${type}/${obj.id}`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {obj.image && <Image src={obj.image} width={40} height={30} />}
          <h2 className="ml-2">{cardName}</h2>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        {rating && <p>rating: {rating}</p>}
        {views && <p>views: {views}</p>}
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick}>
            More
          {/* {obj.name ? (
            <Link href={`/recipes/${obj.id}`}>More</Link>
          ) : obj.title ? (
            <Link href={`/posts/${obj.id}`}>More</Link>
          ) : (
            <Link href={`/users/${obj.id}`}>More</Link>
          )} */}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
