import React, { Component } from 'react';

class Form7 extends Component {
    constructor(props){
        super(props)
        this.state={
            person:{
                university: "",
                institute: "",
                branch: "",
                degree: "",
                status: "",
                cgpa: "",
                
                },
            allUsers:[
                {
                university: "Visveswaray",
                institute: "gech",
                branch: "cse",
                degree: "BE",
                status: "completed",
                cgpa: "60",
                }
                
            ]
        }
    }
    handleChange=(e)=>{
        // console.log(e.target.value);
        var newObject = {...this.state.person}
        newObject[e.target.name]=e.target.value
        this.setState({person:newObject})
    }
    adduser=()=>{
        
        var newAllUsers=[...this.state.allUsers]
        newAllUsers.push(this.state.person)
        this.setState({allUsers:newAllUsers})
    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="university">university</label>
                    <input type="text" name="university" value={this.state.person.university} onChange={(e)=>{this.handleChange(e)}} /><br/>
                    <label htmlFor="institute">institute</label>
                    <input type="text" name="institute" value={this.state.person.institute} onChange={(e)=>{this.handleChange(e)}}  /><br/>
                    <label htmlFor="branch">branch</label>
                    <select name="branch" value={this.state.person.branch} onChange={(e)=>{this.handleChange(e)}}>
                        <option>Select</option>
                        <option value="CSE">CSE</option>
                        <option value="Mech">Mech</option>
                        <option value="Civil">Civil</option>

                    </select><br/>
                    <label htmlFor="degree">degree</label>
                    <select name="degree" value={this.state.person.degree} onChange={(e)=>{this.handleChange(e)}} >
                        <option>Select</option>
                        <option value="Btech">Btech</option>
                        <option value="BE">BE</option>

                    </select>
                    <label htmlFor="status">status</label>
                    <input type="radio" name="status" value={this.state.person.status} checked={this.state.person.status === "pursuing"} onChange={(e)=>{this.handleChange(e)}} />pursuing
                    <input type="radio" name="status" value={this.state.person.status} checked={this.state.person.status === "completed"} onChange={(e)=>{this.handleChange(e)}} /> <br/>completed <br/>
                    <label htmlFor="cgpa">CGPA</label>
                    <input type="number" style={{ width: 40 }} value={this.state.person.cgpa} onChange={(e)=>{this.handleChange(e)}} />
                    <button type="button" onClick={this.adduser}>AddUser</button>
                </form>
                <table className="table">
  <thead>
    <tr >
      <th >university</th>
      <th >institute</th>
      <th >degree</th>
      <th>branch</th>
      <th>status</th>
      <th>cgpa</th>
      <th>edit</th>
      <th>delete</th>
      
    </tr>
  </thead>
  <tbody>
    {this.state.allUsers.map((usr)=> <tr>
        <td>{usr.university}</td>
        <td>{usr.institute}</td>
        <td>{usr.degree}</td>
        <td>{usr.branch}</td>
        <td>{usr.status}</td>
        <td>{usr.cgpa}</td>
        <td><button onClick={()=>{this.editUser()}} className='btn btn-primary'>Edit</button></td>
        <td><button onClick={()=>{this.deleteUser()}} className='btn btn-danger'>Delete</button></td>
    </tr>)}
    
  </tbody>
</table>
            </div>
        );
    }
}

export default Form7;
