import Link from 'next/link';
import React from 'react'
async function getUser() {
    let data = await fetch("http://localhost:3000/api/users",{cache: 'no-store'}).then((res)=>res.json())
    console.log(data)
    return data
}
type itemsType = {
    id: number,
    name: string,
    age: string,
    email: string
}
export default async function page() {
    const users = await getUser();
    // console.log(users);
  return (
    <div>
        <h1>User List</h1>
        {
            users.map((item: itemsType)=>(
                <div className='w-24 flex gap-4'>
                    <span><Link href={`users/${item.id}`}>{item.name}</Link></span>
                    <span><Link href={`users/${item.id}/update`}>Edit</Link></span>
                </div>
            ))
        }
    </div>
  )
}
