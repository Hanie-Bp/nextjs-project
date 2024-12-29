import Posts from "@/components/Posts";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "about posts ",
};

const page = () => {
  return (
    <div className=" p-10">
      <Posts />
    </div>
  );
};

export default page;
