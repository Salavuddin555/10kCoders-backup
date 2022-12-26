import React, { Component } from 'react';
import axios from 'axios';

class Form1Server extends Component {
    constructor(props){
        super(props)
        this.state={
            person:{
            id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:""
            },
            user:[],
            editIndex:null
        }

        

    }

handleChange=(e)=>{
    var newObject={...this.state.person}
    newObject[e.target.name]=e.target.value
    this.setState({person:newObject})
}
adduser=()=>{
   axios({
    method:"post",
    url:"http://localhost:3001/form1/",
    data:this.state.person,
    header:{
        "Content-Type":"application/json"
    }


   })
   var newAddUser=[...this.state.person]
   newAddUser.push(this.state.person)
   this.setState({person:newAddUser})
}
clearForm=()=>{
    var newForm={
            id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:""
    }
    this.setState({person:newForm})
}
updateuser=()=>{
    var number=this.state.editIndex+1
    axios({
        method:"put",
        url:"http://localhost:3001/form1/"+number,
        data:this.state.person


    })
    var newUpdate=[...this.state.user]
    newUpdate[this.state.editIndex]=this.state.person
    this.setState({user:newUpdate,editIndex:null})
}

    editUser=(usr,i)=>{
        this.setState({person:usr,editIndex:i})
    }
    deleteUser=(usr,id)=>{
        var number=id+1
        axios.delete("http://localhost:3001/form1/"+number).then((res)=>
        this.componentDidMount()
        )
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="id">Id</label>
                    <input type="number" name="id" value={this.state.person.id} onChange={(e)=>{this.handleChange(e)}} disabled /> <br/>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.person.name} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="username">UserName</label>
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
        <table className="table">
  <thead>
    <tr>
        <th>id</th>
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
            {this.state.user.map((usr,i)=><tr key={i}>
                <td>{usr.id}</td>
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
    async componentDidMount(){
      var response = await  axios.get("http://localhost:3001/form1")
      console.log(response);
            this.setState({user:response.data})
        }
    }


export default Form1Server;
