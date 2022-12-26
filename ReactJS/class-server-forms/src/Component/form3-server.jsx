

import axios from 'axios';
import React, { Component } from 'react';

export class Form3Server extends Component {
    constructor(){
        super()
        this.state={
            person:{
                id:"",
                 fname:"",
                 lname:"",
                 dob:"",
                 email:"",
                 mobile:"",
            },
            allUser:[],
            editIndex:null
        }
    }
    handelForm=(e)=>{
        var newPerson={...this.state.person}
        newPerson[e.target.name]=e.target.value 
        this.setState({person:newPerson})
    }

    addUser=()=>{
        axios({
            method:"post",
            url:"http://localhost:3003/form3",
            data:this.state.person,
            headers:{
                "Content-Type":"application/json"
            }

        })
       var newUsers=[...this.state.allUser]
       newUsers.push(this.state.person)
       this.setState({allUser:newUsers})
       this.clearForm()
    }

    clearForm=()=>{
        var newForm={
            id:"",
            fname:"",
            lname:"",
            dob:"",
            email:"",
            mobile:"",
       }
       this.setState({person:newForm})
    }

    editUser=(user,i)=>{ 
        this.setState({person:user,editIndex:i})
    }

    deleteUser=(user,id)=>{
        var number=id+1
        axios.delete("http://localhost:3003/form3/"+number).then((res)=>
        this.componentDidMount()
        )
    }
    updateUser=()=>{
        var number=this.state.editIndex+1
        axios({
            method:"put",
            url:"http://localhost:3003/form3"+number,
            data:this.state.person

        })
       var updateusr=[...this.state.allUser] 
       updateusr[this.state.editIndex]=this.state.person
       this.setState({allUser:updateusr,editUser:null})
       this.clearForm()
    }
    render() {
        return (
            <div>
                <form action="">
                <label>Id:</label>
                     <input type="text" name="id"  value={this.state.person.id }  onChange={(e)=>this.handelForm(e)} disabled/>
                     <label>First Name:</label> 
                     <input type="text" name="fname"  value={this.state.person.fname }  onChange={(e)=>this.handelForm(e)}/>
                     <br/><br/>
                     <label>Last Name:</label>
                     <input type="text" name="lname" value={this.state.person.lname} onChange={(e)=>this.handelForm(e)}  />
                     <br/><br/>
                     <label>DOB:</label>
                     <input type="date" name="dob" value={this.state.person.dob }  onChange={(e)=>this.handelForm(e)} />
                     <br/><br/>
                     <label>Email:</label>
                     <input type="email" name="email"  value={this.state.person.email}  onChange={(e)=>this.handelForm(e)}/>
                     <br/><br/>
                     <label>Mobile Number:</label>
                     <input type="text" name="mobile" value={this.state.person.mobile}  onChange={(e)=>this.handelForm(e)} />
                     <br/><br/>
                     {/* {this.state.editIndex!== null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button>:
                     <button className='btn btn-primary' type="button"  onClick={this.addUser}>Add user</button>} */}
                      {this.state.editIndex !== null ? <button  type="button" className="btn btn-primary" onClick={this.updateUser}>Update User</button>
                    :<button type="button" className="btn btn-primary" onClick={this.addUser}>Add User</button>}
                </form>
                <hr />
                <table className='table'>
                    <thead>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.allUser.map((user,i)=>
                         <tr>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.dob}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td><button type='button' className='btn btn-warning' onClick={()=>{this.editUser(user,i)}}>Edit</button></td>
                            <td><button type='button' className='btn btn-danger' onClick={()=>{this.deleteUser(user,i)}}>Delete</button></td>
                         </tr> )}
                    </tbody>
                </table>
            </div>
        );
    }
    async componentDidMount(){
        var response=await axios("http://localhost:3003/form3")
        console.log(response);
        this.setState({allUser:response.data})
    }
}

