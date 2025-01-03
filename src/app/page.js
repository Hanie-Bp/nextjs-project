import Posts from "@/components/Posts";
import Recipes from "@/components/Recipes";
import Users from "@/components/Users";
import React, { Suspense } from "react";

export const metadata = {
  title: "Home page",
  description: "about users and their posts and recipes",
}

const page = () => {
  return (
    <div className=" p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Recipes />
      </Suspense>
    </div>
  );
};

export default page;
