import Users from "@/components/Users";
import React from "react";

export const metadata = {
  title: "Users",
  description: "about users",
}


const page = () => {
  return (
    <div className=" p-10">
      <Users />
    </div>
  );
};

export default page;
