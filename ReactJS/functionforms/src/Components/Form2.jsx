


 import React, { useEffect } from "react"
 import axios from 'axios'
import { useState } from "react";
 const Form2=()=>{
    const [user,setUser]= useState({
                id:"",
                name:"",
                username:"",
                email:"",
                password:"",
                message:""
    });
    useEffect(() => {
    getAllUsers()
    }, []);
 const [users,setUsers]=useState([])
 const [isEdit,setisEdit]=useState(false)

    const handleChange=(e)=>{
            var newUser={...user};
            newUser[e.target.name]=e.target.value ;
            setUser(newUser);
    }

    const getAllUsers=()=>{
        axios.get("http://localhost:3005/form1").then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
    }
   

    const addUser=()=>{
        axios.post("http://localhost:3005/form1/",user ).then(()=>{
            getAllUsers()
            clearForm()
        })
    }

    const clearForm=()=>{
        setUser( {id:"",
        name:"",
        username:"",
        email:"",
        password:"",
        message:""})
    }

    const editUser=(usr)=>{
      setisEdit(true)
      setUser(usr)
    }

    const updateUser=()=>{
        axios.put("http://localhost:3005/form1/"+user.id,user).then(()=>{
            getAllUsers()
            setisEdit(false)
           
        })
        clearForm()
    }
    const deleteUser=(usr)=>{
        axios.delete("http://localhost:3005/form1/" +usr.id).then(()=>{
            getAllUsers()
        })
    }
  return(
    <div>
         <form   >
                 <label >ID:</label>
                    <input type="text" name="id" value={user.id} disabled  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >Name:</label>
                    <input type="text" name="name" value={user.name}  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >User Name:</label>
                    <input type="text" name="username" value={user.username} onChange={(e)=>handleChange(e)} />
                    <br /><br />
                    <label >Email:</label>
                    <input type="email" name="email" value={user.email}  onChange={(e)=>handleChange(e)}/>
                    <br /><br />
                    <label >Password:</label>
                    <input type="password" name="password"  value={user.password} onChange={(e)=>handleChange(e)} />
                    <br /><br />
                    <label >Message:</label>
                    <textarea name="message" cols="20" rows="2" value={user.message} onChange={(e)=>handleChange(e)}></textarea>
                    <br /><br />
                    {isEdit ? <button  type="button" className="btn btn-primary" onClick={updateUser}>Update User</button> :
                    <button type="button" className="btn btn-primary" onClick={addUser}>Add User</button>}
                </form>
                <hr /> 

                <table className="table">
                    <thead>
                        <th>ID</th>
                       <th>Name</th>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Password</th>
                       <th>Message</th>
                       <th>Edit</th>
                       <th>Delete</th>
                    </thead>
                    <tbody>
                    {users.map((usr,i)=>
                    <tr key={i}>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.password}</td>
                        <td>{usr.message}</td>
                        <td>< button type="button" className="btn btn-warning" onClick={()=>editUser(usr,i)}>EDIT</button></td>
                        <td><button type="button" className="btn btn-danger " onClick={()=>deleteUser(usr,i)} >DELETE</button></td>
                    </tr>)} 
                    </tbody>
                </table> 
    </div>
  )
}
