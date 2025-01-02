import {data} from "@/utils/data";

export async function GET(req,{params}) {
    const filteredData = data.recipes.filter((recipe) => recipe.id === params.id);
    return Response.json(filteredData);
}