import { NextResponse } from "next/server";

export function GET(request: any){
    return NextResponse.json({name: "Ali", age: 6, city: "Chakwal"},{status: 200})
    // return NextResponse.json({name: "Ali", age: 6, city: "Chakwal"},{status: 404})
}