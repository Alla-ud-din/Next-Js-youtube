import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(request: any,content: { params: { id: number; }; }){
    const userData = user.filter((item: { id: number; })=>item.id==content.params.id)
    return NextResponse.json(userData.length==0?{result: "No Data Found", success: false}:{result: userData,success:true},
    {status:200})
}