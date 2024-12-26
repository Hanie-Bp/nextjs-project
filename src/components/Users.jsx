import getData from "@/utils/actions";
import React from "react";

import CardComponent from "./CardComponent";

const Users = async () => {
  const data = await getData("https://dummyjson.com/users");

  return (
    <>
      <h1 className="text-xl m-2 bg-slate-400 rounded p-3">Users</h1>
      <div className="p-2 flex flex-wrap items-center justify-center  gap-4">
        {data.users?.map((obj) => {
          return (
            <CardComponent key={obj.id} obj={obj} type={"users"} />
            // <Card key={obj.id}>
            //   <CardHeader>
            //     <CardTitle className="flex items-center">
            //       <Image src={obj.image} width={40} height={30} />
            //       <h2 className="ml-2">
            //         {obj.firstName} {obj.lastName}
            //       </h2>
            //     </CardTitle>
            //     {/* <CardDescription>Card Description</CardDescription> */}
            //   </CardHeader>
            //   <CardContent>
            //     <p>{obj.email}</p>
            //   </CardContent>
            //   <CardFooter>
            //     <Button>
            //       <Link href={`/users/${obj.id}`}>More</Link>
            //     </Button>
            //   </CardFooter>
            // </Card>
          );
        })}
      </div>
    </>
  );
};

export default Users;
