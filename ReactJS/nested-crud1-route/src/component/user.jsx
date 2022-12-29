import React from 'react';

const User = ({usr}) => {
    const editUser=()=>{

    }
    const deleteUser=()=>{

    }
    return (
        <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>{usr.message}</td>
                <td><button
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
    );
}

export default User;
