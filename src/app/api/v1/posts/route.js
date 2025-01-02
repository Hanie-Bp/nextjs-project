import { data } from "@/utils/data";


export async function GET(req) {
  // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa",data.posts);
  
  return Response.json(data.posts);
}

export async function POST(req) {
  console.log(req);
  data.posts.push(await req.json());
  return Response.json(data);
}
