import React, { Component } from 'react';

class Form5 extends Component {
    constructor(){
        super();
        this.state={
            person:{
                street:"",
                city:"",
                state:"",
                zipcode:"",
                country:""
            },
            allUsers:[],
            editIndex:null,
        }
    }

    handleForm=(e)=>{
        var newPerson={...this.state.person}
        newPerson[e.target.name]=e.target.value 
        this.setState({person:newPerson})
    }

    addUser=()=>{
            console.log(this.state)
            var newUser=[...this.state.allUsers]
            newUser.push(this.state.person)
            this.setState({allUsers:newUser})
            this.clearForm()

    }


    clearForm=()=>{
         var  newForm={
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
        };
        this.setState({person:newForm})
    }

    editUser=(user,i)=>{
 this.setState({person:user,editIndex:i})
    }

    deleteUser=(user)=>{
      var deleteUsr=this.state.allUsers.filter((ele)=> ele.city!== user.city )
      this.setState({allUsers:deleteUsr})
    }

 
    updateUser=()=>{
      var latestUser=[...this.state.allUsers]
      latestUser[this.state.editIndex]=this.state.person
      this.setState({allUsers:latestUser,editIndex:null})
      this.clearForm()
    }

    render() {
        return (
            <div>
                <form action="">
                    <label >Street:</label>
                    <input type="text" name="street" value={this.state.person.street}  onChange={(e)=>{this.handleForm(e)}}/>
                    <br /><br />
                    <label >City,State:</label>
                    <input type="text" name="city" value={this.state.person.city}  onChange={(e)=>{this.handleForm(e)}}/>&nbsp;
                    <input type="text" name="state" style={{width:"40px"}} value={this.state.person.state}  onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    <label >Zip Code:</label>
                    <input type="text" name="zipcode"  value={this.state.person.zipcode}  onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    <label >Country:</label>
                    <input type="text" name="country" value={this.state.person.country} onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    {this.state.editIndex !== null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button> :
                    <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>}
                </form>
                <br />
                <table className='table'>
                    <thead>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((user,i)=>
                          <tr key={i}>
                            <td>{user.street}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zipcode}</td>
                            <td>{user.country}</td>
                            <td>< button type="button" className='btn btn-warning' onClick={()=>{this.editUser(user,i)}}>EDIT</button></td>
                            <td><button type="button" className='btn btn-danger' onClick={()=>{this.deleteUser(user,i)}}>DELETE</button></td>
                          </tr>   
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Form5;