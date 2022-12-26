import {useState} from "react";
export const Person=()=>{
    const[person,setPerson]=useState({
        fname:"salavuddin",
        lname:"sk"
    })
    const changePersonDetails=()=>{
        console.log("Change!!!");
        setPerson({...person,lname:"Ram"})
    }
    return(
        <div>
            <h2>Hello from </h2>
            <button onClick={changePersonDetails("Hello all")}>Change Message</button>
            <ul>
                <li>{person.fname}</li>
                <li>{person.lname}</li>
            </ul>
        </div>
    )
}