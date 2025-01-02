import {data} from "@/utils/data";

export async function GET(req,{params}) {
   const filteredData = data.posts.filter((obj) => obj.id === params.id);
   return Response.json(filteredData);
}