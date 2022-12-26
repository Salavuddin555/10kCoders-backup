


import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const FuncForm4 = () => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    dateofbirth: "",
    height: "",
    weight: "",
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
    axios.post("http://localhost:3003/form3", user).then(() => {
      getAllUsers();
      clearForm();
    });
  };

  const getAllUsers = () => {
    axios.get("http://localhost:3003/form3").then((respose) => {
      setUsers(respose.data);
    });
  };

  const clearForm = () => {
    setUser({
      id: "",
      username: "",
      password: "",
      email: "",
      dateofbirth: "",
      height: "",
      weight: "",
    });
  };

  const editUser = (usr) => {
    setIsEdit(true);
    setUser(usr);
  };

  const updateUser = () => {
    axios.put("http://localhost:3003/form3/" + user.id, user).then(() => {
      getAllUsers();
      setIsEdit(false);
      clearForm();
    });
  };

  const deleteUser = (usr) => {
    axios.delete("http://localhost:3003/form3/" + usr.id).then(() => {
      getAllUsers();
    });
  };

  return (
    <div className="container">
      <br />
      <br />
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
        <label htmlFor="">username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">password:</label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handlechange(e);
          }}
        />

        <br />
        <label htmlFor="">dateofbirth:</label>
        <input
          name="dateofbirth"
          type="datetime-local"
          value={user.dateofbirth}
          onChange={(e) => {
            handlechange(e);
          }}
        />

        <br />
        <label htmlFor="status">height:</label>
        <input
          name="height"
          type="number"
          value={user.height}
          onChange={(e) => {
            handlechange(e);
          }}
        />

        <br />
        <label htmlFor="cgpa">weight:</label>
        <input
          type="number"
          name="weight"
          value={user.weight}
          onChange={(e) => {
            handlechange(e);
          }}
        />

        <br />
        <br />
        {isEdit ? (
          <button
            type="button"
            onClick={updateUser}
            className="btn btn-primary"
          >
            Update User
          </button>
        ) : (
          <button type="button" onClick={addUser} className="btn btn-primary">
            Add User
          </button>
        )}
      </form>
      <hr />
      <table className="table" style={{ border: 2 }}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>username</th>
            <th>password</th>
            <th>email</th>
            <th>height</th>
            <th>weight</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.Name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>

              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    editUser(user);
                  }}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    deleteUser(user);
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
};
