import getData from "@/utils/actions";
import { data } from "@/utils/data";


export async function GET(req) {
  return Response.json(data.users);
}

export async function POST(req) {
  console.log(req);
  data.users.push(await req.json());
  return Response.json(data);
}
