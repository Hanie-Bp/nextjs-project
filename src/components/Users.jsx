import getData from "@/utils/actions";
import React from "react";

import CardComponent from "./CardComponent";
import dynamic from "next/dynamic";

const Users = async () => {
  const data = await getData("https://dummyjson.com/users");

  const CardComponent = dynamic(() => import("./CardComponent"), {
    loading: () => (
      <button type="button" className="bg-black text-white" disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3"
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    ),
  });

  return (
    <>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Users</h1>
      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data.users?.map((obj) => {
          return <CardComponent key={obj.id} obj={obj} type={"users"} />;
        })}
      </div>
    </>
  );
};

export default Users;
