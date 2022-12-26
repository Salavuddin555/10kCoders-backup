import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const FuncForm5 = () => {
  const [user, setUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    dateofbirth: "",
    mobile: "",
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
    axios.post("http://localhost:3004/form4", user).then(() => {
      getAllUsers();
      clearForm();
    });
  };

  const getAllUsers = () => {
    axios.get("http://localhost:3004/form4").then((respose) => {
      setUsers(respose.data);
    });
  };

  const clearForm = () => {
    setUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
      dateofbirth: "",
      mobile: "",
    });
  };

  const editUser = (usr) => {
    setIsEdit(true);
    setUser(usr);
  };

  const updateUser = () => {
    axios.put("http://localhost:3004/form4/" + user.id, user).then(() => {
      getAllUsers();
      setIsEdit(false);
      clearForm();
    });
  };

  const deleteUser = (usr) => {
    axios.delete("http://localhost:3004/form4/" + usr.id).then(() => {
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
        <label htmlFor="">fname:</label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="">lname:</label>
        <input
          type="text"
          name="lname"
          value={user.lname}
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
        <label htmlFor="status">mobile:</label>
        <input
          name="mobile"
          type="number"
          value={user.mobile}
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
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>fName</th>
            <th>lname</th>
            <th>email</th>
            <th>dateofbirth</th>
            <th>mobile</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.mobile}</td>

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