"use client"
import { useEffect, useState } from "react"

export default function page({ params }: { params: { userid: number } }) {
    // console.log(params.userid)
    let id = params.userid
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    useEffect(()=>{
        getUserDetails()
    },[])
    const getUserDetails = async ()=>{
        let data = await fetch("http://localhost:3000/api/users/"+id).then((res)=>res.json())
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }
    const updateUser = async ()=>{
        // console.log(name,age,email);
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method:"PUT",
            body: JSON.stringify({name,age,email}),
            cache: 'no-store'
          }).then((res)=>res.json());
        console.log(result)
        if(result.success){
            alert("user information updated")
        }else{
            alert("please try with valid input")
        }
    }
    return (
        <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="font-extrabold text-3xl mb-2">Update User Details</h1>
            <div className="flex flex-col w-72">
                <input type='text' placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className=" border border-black m-2 " />
                <input type='text' placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} className="border border-black m-2 " />
                <input type='text' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black m-2 " />
                <button onClick={updateUser} className="bg-sky-600 text-white w-72 p-1 border cursor-pointer rounded-xl">Update User details</button>
            </div>
        </div>
    )
}
