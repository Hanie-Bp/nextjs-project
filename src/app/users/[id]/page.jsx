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
  const adress =
    user.address.country +
    " " +
    user.address.state +
    " " +
    user.address.city +
    " " +
    user.address.address;
  return (
    <div className="flex justify-center items-center  h-[90vh] p-4">
      <Card className="bg-slate-200 w-full max-w-lg mx-auto my-10 h-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <h2 className="text-xl md:text-2xl">
              {user.firstName} {user.lastName}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <span>Email:</span> {user.email}
            </li>
            <li>
              <span>Age:</span> {user.age}
            </li>
            <li>
              <span>Gender:</span> {user.gender}
            </li>
            <li>
              <span>Birth date:</span> {user.birthDate}
            </li>
            <li>
              <span>Address:</span> {adress}
            </li>
            <li>
              <span>Role:</span> {user.role}
            </li>
            <li>
              <span>University:</span> {user.university}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/users">
            <Button>Back</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default userCard;
