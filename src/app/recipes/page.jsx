import Recipes from "@/components/Recipes";
import React from "react";

export const metadata = {
  title: "Recipes",
  description: "about recipes",
};

const page = () => {
  return (
    <div className=" p-10">
      <Recipes />
    </div>
  );
};

export default page;
