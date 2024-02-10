import React from 'react'
async function getUser(id: number) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`).then((res)=>res.json())
    return data
}
export default async function page({params} : {params: {userid: number}}) {
    // console.log(params);
    
    const user = await getUser(params.userid)
    console.log(user);
    
  return (
    <div>
        <h2>User Details</h2>
        <h4>id: {user.result.id}</h4>
        <h4>Name: {user.result.name}</h4>
        <h4>Age: {user.result.age}</h4>
        <h4>email: {user.result.email}</h4>
    </div>
  )
}
