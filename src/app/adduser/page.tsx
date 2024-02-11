"use client"
import { useState } from "react"

export default function page() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const addUser = async() => {
    // console.log(name,age,email)
    let response = await fetch("http://localhost:3000/api/users",{
      method:"Post",
      body: JSON.stringify({name,age,email}),
      cache: 'no-store'
    }).then((res)=>res.json());
    if(response.success){alert("new user added")}
    else{alert("Some error with data please check and try again")}
    // console.log(response.success)
  }
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="font-extrabold text-3xl mb-2">Add New User</h1>
      <div className="flex flex-col w-72">
        <input type='text' placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} className=" border border-black m-2 " />
        <input type='text' placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} className="border border-black m-2 "/>
        <input type='text' placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-black m-2 "/>
      </div>
      <button onClick={addUser} className="bg-sky-600 text-white w-72 m-10 p-1 border cursor-pointer rounded-xl">Add User</button>
    </div>
  )
}
