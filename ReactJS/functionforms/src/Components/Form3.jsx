

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const FuncForm3 = () => {
  const [user, setUser] = useState({
    id: "",
    university: "",
    institute: "",
    branch: "",
    degree: "",
    status: "",
    cgpa: "",
    upto: "",
    experience: "",
    website: "",
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
    axios.post("http://localhost:3002/form2", user).then(() => {
      getAllUsers();
      clearForm();
    });
  };

  const getAllUsers = () => {
    axios.get("http://localhost:3002/form2").then((respose) => {
      setUsers(respose.data);
    });
  };

  const clearForm = () => {
    setUser({
      id: "",
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      cgpa: "",
      upto: "",
      experience: "",
      website: "",
    });
  };

  const editUser = (usr) => {
    setIsEdit(true);
    setUser(usr);
  };

  const updateUser = () => {
    axios.put("http://localhost:3002/form2/" + user.id, user).then(() => {
      getAllUsers();
      setIsEdit(false);
      clearForm();
    });
  };

  const deleteUser = (usr) => {
    axios.delete("http://localhost:3002/form2/" + usr.id).then(() => {
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
        <label htmlFor="university">university:</label>
        <input
          type="text"
          name="university"
          value={user.university}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="institute">institute:</label>
        <input
          type="text"
          name="institute"
          value={user.institute}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="branch">branch:</label>
        <select
          name="branch"
          value={user.branch}
          onChange={(e) => {
            handlechange(e);
          }}
        >
          <option value="ece">ece</option>
          <option value="cse">cse</option>
          <option value="eee">eee</option>
          <option value="mech">mech</option>
        </select>
        <br />
        <label htmlFor="degree">degree:</label>
        <select
          name="degree"
          value={user.degree}
          onChange={(e) => {
            handlechange(e);
          }}
        >
          <option value="be">be</option>
          <option value="bcom">bcom</option>
          <option value="bsc">bsc</option>
          <option value="biotech">biotech</option>
        </select>
        <br />
        <label htmlFor="status">status:</label>
        <select
          name="status"
          value={user.status}
          onChange={(e) => {
            handlechange(e);
          }}
        >
          <option value="pursuing">pursuing</option>
          <option value="completed">completed</option>
        </select>
        <br />
        <label htmlFor="cgpa">cgpa:</label>
        <input
          type="number"
          name="cgpa"
          value={user.cgpa}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="upto">upto:</label>
        <input
          type="text"
          name="upto"
          value={user.upto}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="experience">experience:</label>
        <input
          type="number"
          name="experience"
          value={user.experience}
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <br />
        <label htmlFor="website">website:</label>
        <input
          type="url"
          name="website"
          value={user.website}
          onChange={(e) => {
            handlechange(e);
          }}
        />{" "}
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
            <th>university</th>
            <th>institute</th>
            <th>branch</th>
            <th>degree</th>
            <th>status</th>
            <th>cgpa</th>
            <th>upto</th>
            <th>experience</th>
            <th>website</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.university}</td>
              <td>{user.institute}</td>
              <td>{user.branch}</td>
              <td>{user.degree}</td>
              <td>{user.status}</td>
              <td>{user.cgpa}</td>
              <td>{user.upto}</td>
              <td>{user.experience}</td>
              <td>{user.website}</td>
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
