

import React,{ useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const FuncForm2 = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    message: "",
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getAllUsers();
  }, []);

  const handlechange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const addUser = () => {
    axios.post("http://localhost:3204/form1", user).then(() => {
      getAllUsers();
      clearForm();
    });
  };

  const getAllUsers = () => {
    axios.get("http://localhost:3204/form1").then((respose) => {
      setUsers(respose.data);
    });
  };

  const clearForm = () => {
    setUser({
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      message: "",
    });
  };

  const editUser = (usr) => {
    setIsEdit(true);
    setUser(usr);
  };

  const updateUser = () => {
    axios.put("http://localhost:3204/form1" + user.id, user).then(() => {
      getAllUsers();
      setIsEdit(false);
      clearForm();
    });
  };

  const deleteUser = (usr) => {
    axios.delete("http://localhost:3204/form1" + usr.id).then(() => {
      getAllUsers();
    });
    
  }
    return (
      <div className="container">
        <form>
          <label htmlFor="">ID</label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Confirm Password:</label>
          <input
            type="text"
            name="confirmpassword"
            value={user.confirmpassword}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Message:</label>
          <input
            type="text"
            name="message"
            value={user.message}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          {isEdit ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={updateUser}
            >
              Update user
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={addUser}>
              Add user
            </button>
          )}
        </form>
        <br />
        <hr />
        <br />
        <table className="table">
          <thead>
            <tr>
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
          <tbody>
            {users.map((usr, i) => (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>{usr.message}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      editUser(usr);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(usr);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ); 
    
}

