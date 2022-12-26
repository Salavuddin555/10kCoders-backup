import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const FunctionalServerForm4 = () => {

    const [user,setUser]=useState({
                id:"",
                street:"",
                city:"",
                state:"",
                zipcode:"",
                country:""
    })
    const [allUsers,setallUsers]=useState([])
   const [isEdit,setisEdit]=useState(false)

   useEffect(() => {
    getallUsers()
   }, []);

    const handleUser=(e)=>{
          var newUser={...user}
          newUser[e.target.name]=e.target.value 
          setUser(newUser)
    }

  const  getallUsers=()=>{
          axios.get("http://localhost:3005/form4").then((res)=>{
            console.log(res.data)
            setallUsers(res.data)
          })
  }


  const clearForm=()=>{
    setUser({
        id:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:""
    })
  }
  const addUser=()=>{
      axios.post("http://localhost:3005/form4/",user).then(()=>{
        getallUsers()
        clearForm()
      })
  }

  const deleteUser=(usr)=>{
     axios.delete("http://localhost:3005/form4/"+usr.id).then(()=>{
        getallUsers()
     })
  }

  const editUser=(usr)=>{
     setisEdit(true)
     setUser(usr)
  }

  const updateUser=()=>{
        axios.put("http://localhost:3005/form4/"+user.id,user).then(()=>{
            getallUsers()
            clearForm()
            setisEdit(false)
        })
  }

    return (
        <div>
             <form >
                     <label >ID</label>
                    <input type="text"  name="id" value={user.street} disabled onChange={(e)=>handleUser(e)}/><br /><br />
                    <label >Street</label>
                    <input type="text"  name="street" value={user.street}  onChange={(e)=>handleUser(e)}/><br /><br />
                    <label >City,State</label>
                    <input type="text"  name="city" value={user.city} onChange={(e)=>handleUser(e)} />&nbsp;
                    <input type="text"  name="state" style={{width:"40px"}} value={user.state}  onChange={(e)=>handleUser(e)}/>
                    <br /><br />
                    <label >Zip Code</label>
                    <input type="text"  name="zipcode" value={user.zipcode} onChange={(e)=>handleUser(e)} />
                    <br /><br />
                    <label >Country</label>
                    <input type="text"  name="country" value={user.country}  onChange={(e)=>handleUser(e)}/>
                    <br /><br />
                    {isEdit ? <button type='button' className='btn btn-primary' onClick={updateUser}>Update User</button>:
                    <button type='button' className='btn btn-primary' onClick={addUser}>Add User</button>}
                </form>
                <hr />
                 <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {allUsers.map((usr,i)=>
                        <tr key={i}>
                            <td>{usr.id}</td>
                            <td>{usr.street}</td>
                            <td>{usr.city}</td>
                            <td>{usr.state}</td>
                            <td>{usr.zipcode}</td>
                            <td>{usr.country}</td>
                            <td><button type='button' className='btn btn-warning' onClick={()=>editUser(usr,i)}>EDIT</button></td>
                            <td><button type='button' className='btn btn-danger' onClick={()=>deleteUser(usr,i)}>DELETE</button></td>
                        </tr>
                        )}
                    </tbody>
                </table> 
        </div>
    );
}

export default FunctionalServerForm4;