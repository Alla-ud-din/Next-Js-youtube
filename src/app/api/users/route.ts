import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;
    return NextResponse.json(data, {status: 200})
}
export async function POST(request: any){
    // console.log(request);
    
    let payload = await request.json();
    console.log(payload);
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: "require field not found", success: false},{status:400})
    }
    return NextResponse.json({result: "new user created", success: true},{status:201})
}

// Go to Postman => POST => paste link (http://localhost:3000/api/users) => body => change 'text' to 'json' and type 
// {
//     "name": "Ali",
//     "age": 6,
//     "email": "ali@test.com"
// }
// => click Send