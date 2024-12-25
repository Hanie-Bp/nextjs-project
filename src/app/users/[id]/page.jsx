import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getData from "@/utils/actions";
import Link from "next/link";
import React from "react";

const userCard = async ({ params }) => {
  const user = await getData(`https://dummyjson.com/users/${params.id}`);
  console.log(user);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <ul>
            <li>Email: {user.email}</li>
            <li>Age: {user.age}</li>
            <li>Gender: {user.gender}</li>
            <li>Birth date: {user.birthDate}</li>
          </ul>
        

        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default userCard;
