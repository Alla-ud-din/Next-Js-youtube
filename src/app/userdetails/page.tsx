"use client"
import Script from "next/script";
export default function Page() {
    return (
        <div>
            <Script
            src="/location.tsx"
            onLoad={()=>{
                console.log("file loaded");
            }}
             />
            <h1>Get user getLocation</h1>
        </div>
    )
}