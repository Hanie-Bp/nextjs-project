import {data} from "@/utils/data";

export async function GET(req,{params}) {
    // console.log(data.users);
    
    const filteredData = data.users.filter((obj) => obj.id === params.id);
    return Response.json(filteredData);
}