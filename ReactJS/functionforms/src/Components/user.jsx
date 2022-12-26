import { useState } from "react"
export function User(){
    const [message,setMessage]=useState("Welcome to UserComponents")
    return <div>
        <h1>{message}</h1>
        <button onClick={()=>{setMessage("Iamchanged")}}>ChangeMessage</button>
    </div>
}