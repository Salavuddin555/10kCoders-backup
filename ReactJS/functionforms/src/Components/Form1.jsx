import { useState } from "react"
import React, { useEffect } from "react"
import axios from 'axios'
export const Form1fromserver=()=>{
    // const[message,setMesaage]=useState(25)
    const [user,setUser]=useState({
        id:"",
        Name:"",
        UserName:"",
        
        Email:"",
        Password:"",
        ConfirmPassword:"",
        Message:""
    })
    useEffect(()=>{getAllUsers()},[]);
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
    }
    
    const handleSubmit=()=>{
      axios.post("http://localhost:3204/form1",user).then(()=>{
        console.log("user added");
        getAllUsers()
      })
    }
    const getAllUsers=()=>{
      axios.get("http://localhost:3204/form1").then((res)=>{
         console.log(res.data);
        setUser(res.data)
      })
    }
    return (
        <div className="container">
            <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Id</label>
    <input type="text" name="Id" className="form-control" value={user.id} disabled onChange={(e)=>{
        handleChange(e);
    }} />
    </div>          
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
    <input type="text" name="Name" className="form-control" value={user.Name} onChange={(e)=>{
        handleChange(e);
    }} />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >UserName</label>
    <input type="text" className="form-control" name="UserName" value={user.UserName} onChange={(e)=>{
        handleChange(e)
    }} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Email</label>
    <input type="email" name="Email" className="form-control" value={user.Email} onChange={(e)=>{
        handleChange(e)
    }} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" name="Password"  className="form-control" value={user.Password} onChange={(e)=>{
        handleChange(e)
    }} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >ConfirmPassword</label>
    <input type="password" name="ConfirmPassword" className="form-control" value={user.ConfirmPassword} onChange={(e)=>{
        handleChange(e)
    }} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Message</label>
    <textarea name="Message"  cols="30" rows="10" value={user.Message} onChange={(e)=>{
        handleChange(e)
    }} ></textarea>
  </div>



  <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
</form>
        </div>
    )
}