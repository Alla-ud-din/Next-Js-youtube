import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(request: any,content: { params: { id: number; } }){
    const userData = user.filter((item: { id: number; })=>item.id==content.params.id)
    return NextResponse.json(userData.length==0?{result: "No Data Found", success: false}:{result: userData[0],success:true},
    {status:200})
}

// PUT must be inside folder of dynamic route

export async function PUT (request: { json: () => any; }, content: { params: { id: any; }; } ){
    // console.log(content)
    let payload = await request.json();
    payload.id = content.params.id;
    // console.log(payload);
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"request data is not valid",success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
}