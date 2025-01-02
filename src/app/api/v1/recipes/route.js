import {data} from "@/utils/data";

export async function GET(req,{params}) {
    return Response.json(data.recipes);
}