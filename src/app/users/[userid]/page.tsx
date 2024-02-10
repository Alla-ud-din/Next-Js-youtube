import React from 'react'
async function getUser(id: number) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`,{cache: 'no-store'}).then((res)=>res.json())
    console.log(data);
    
    return data.result
}
export default async function page({params} : {params: {userid: number}}) {
    // console.log(params);
    
    const user = await getUser(params.userid)
    // console.log(user);
    
  return (
    <div>
        <h2>User Details</h2>
        <h4>id: {user.id}</h4>
        <h4>Name: {user.name}</h4>
        <h4>Age: {user.age}</h4>
        <h4>email: {user.email}</h4>
    </div>
  )
}
