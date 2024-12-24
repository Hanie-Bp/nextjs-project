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

const Users = async () => {
  const data = await getData("https://dummyjson.com/users");

  return (
    <div className="bg-gray-200 ">
      {data.users?.map((obj) => {
        return (
          <Card key={obj.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image src={obj.image} width={40} height={30} />
                <h2 className="ml-2">
                  {obj.firstName} {obj.lastName}
                </h2>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{obj.email}</p>
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

export default Users;
