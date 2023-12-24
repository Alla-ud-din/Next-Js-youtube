"use client"
export default function Product({price}:any){
    // console.log(price);
    return(
        <div>
            <button onClick={()=>alert(price)}>Check Price </button>
        </div>
    )
}