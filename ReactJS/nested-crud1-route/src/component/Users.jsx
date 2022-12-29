import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './user';

const Users = () => {
    useEffect(() => {
        getUsers()
    }, []);
    const [users,setUsers]=useState([])
  const getUsers=async()=>{
    let data=await(await fetch("http://localhost:3201/form1")).json()
    console.log(data);
    setUsers(data)
    }
    return (
        <div>
            <table>
            <thead>
            <tr>
                <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>password</th>
              <th>confirmpassword</th>
              <th>message</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>{users.map((val,i)=><User usr={val} key={i}/>)}</tbody>
            </table>
        </div>
    );
}

export default Users;
