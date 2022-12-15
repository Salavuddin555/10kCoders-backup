import React, { Component } from 'react';

class Form2 extends Component {
    constructor(){
        super()
        this.state={
            person:{
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:""
            },
            allusers:[],
            editIndex:null,
        }
    }
 handleChange=(e)=>{
    // console.log(e);
    var newObject = {...this.state.person}
    newObject[e.target.name]=e.target.value
    this.setState({person:newObject})
 }
 adduser=()=>{
    // console.log(this.state);
    var newUsers=[...this.state.allusers]
    newUsers.push(this.state.person)
    this.setState({allusers:newUsers})
    this.clearForm()
}
editUser=(usr,i)=>{
    this.setState({person:usr,editIndex:i})


}
deleteUser=(usr,i)=>{
    var deleteUser=this.state.allusers.filter((myUser)=>myUser.email!==usr.email)
    this.setState({allusers:deleteUser})
}
updateuser=()=>{
    var newUpdateUser=[...this.state.allusers]
    newUpdateUser[this.state.editIndex]=this.state.person
    this.setState({allusers:newUpdateUser,editIndex:null})
    this.clearForm()
}
clearForm=()=>{
    var newForm= {
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:""
    }
    this.setState({person:newForm})
}
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={this.state.person.name} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="">UserName</label>
                    <input type="text" name="username" value={this.state.person.username} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" value={this.state.person.email} onChange={(e)=>{this.handleChange(e)}}/> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.person.password} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="confirmpassword">ConfirmPassword</label>
                    <input type="password" name="confirmpassword" value={this.state.person.confirmpassword} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="10" value={this.state.person.message} onChange={(e)=>{this.handleChange(e)}}/> <br />
                    {/* <button type="button" onClick={this.adduser} >AddUser</button> */}
                    {this.state.editIndex!==null ? <button type="button" onClick={this.updateuser}>UpdateUser</button>: <button type="button" onClick={this.adduser} >AddUser</button> }
                </form>
                <hr />
                <table className="table">
  <thead>
    <tr>

      <th>name</th>
      <th>username</th>
      <th>email</th>
      <th>password</th>
      <th>confirmpassword</th>
      <th>message</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
            {this.state.allusers.map((usr,i)=><tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>{usr.message}</td>
                <td><button type="button" onClick={()=>{this.editUser(usr,i)}} className='btn btn-primary'>Edit</button></td>
                <td><button type="button" onClick={()=>{this.deleteUser(usr,i)}} className="btn btn-danger">Delete</button></td>

            </tr>)}
  </tbody>
</table>
            </div>
        );
    }
}

export default Form2;
