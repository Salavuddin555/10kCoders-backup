import axios from 'axios';
import React, { Component } from 'react';

export class Form2Server extends Component {
    constructor(){
        super()
        this.state={
            users:{
                id:"",
                UserName:"",
                Password:"",
                Email:"",
                Gender:"",
                OppositeGender:"",
                year:"",
                month:"",
                date:"",
                Height:"",
                weight:""

            },
            allUsers:[],
            editIndex:null
        }
    }
    handleChange=(e)=>{
        var newObject={...this.state.person}
        newObject[e.target.name]=e.target.value
        this.setState({person:newObject})
    }
    addusr=()=>{
        axios({
            method:"post",
            url:"http://localhost:3002/form2",
            data:this.state.users,
            headers:{
                'Content-Type':'application/json'
            }
        })
        var newUser=[...this.state.allUsers]
        newUser.push(this.state.users)
        this.setState({allUsers:newUser})
    }

    render() {
        return (
            <div>
                <form >
                    <label htmlFor="id">Id</label>
                    <input type="number" name="id" value={this.state.users.id} onChange={(e) => this.handleChange(e)} disabled/>
                <label htmlFor="UserName">UserName:</label>
                    <input type="text" name="UserName" value={this.state.users.UserName} onChange={(e) => this.handleChange(e)} />
                    <br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={this.state.users.Password} onChange={(e) => this.handleChange(e)} />
                    <br /><br />
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" value={this.state.users.Email} onChange={(e) => this.handleChange(e)} />
                    <br /><br />
                    <select name="gender" value={this.state.users.Gender} onChange={(e) => this.handleChange(e)}>
                        <option >Select</option>
                        <option >I am a Women </option>
                        <option >I am a Man</option>
                    </select>
                    <br /><br />
                    <select name="OppositeGender" value={this.state.users.OppositeGender} onChange={(e) => this.handleChange(e)}>
                        <option >Select</option>
                        <option >I want to find Man</option>
                        <option >I want to find Women</option>
                    </select>
                    <br /><br />
                    <select name="year"  value={this.state.users.year} onChange={(e)=>{this.handleChange(e)}}>
                        <option>year</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                    </select>
                    <select id="month" name="month" value={this.state.users.month} onChange={(e)=>{this.handleChange(e)}}>
                        <option>month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select name="day" id="day" value={this.state.users.date} onChange={(e)=>{this.handleChange(e)}}>
                        <option>day</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>

                    </select><br /><br /><br />
                    <label htmlFor="">Height/Weight:</label>
                    <select name="height" value={this.state.users.Height} onChange={(e) => this.handleChange(e)}>
                        <option >Height</option>
                        <option >5.3</option>
                        <option >5.4</option>
                        <option >5.6</option>
                        <option >5.7</option>
                        <option >5.8</option>
                    </select>
                    <select name="weight" value={this.state.users.weight} onChange={(e) => this.handleChange(e)}>
                        <option >Weight</option>
                        <option >55</option>
                        <option >56</option>
                        <option >57</option>
                        <option >58</option>
                        <option >59</option>
                    </select>
                    <br /><br />
                    {this.state.editIndex !== null ? <button  type="button" className="btn btn-primary" onClick={this.updateusr}>Update User</button>
                    :<button type="button" className="btn btn-primary" onClick={this.addusr}>Add User</button>}
                </form>
                <hr />
                <table className="table">
                    <thead>
                        <th>id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Opposite Gender</th>
                        <th>Date of Birth</th>
                        <th>Height/Weight</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr, i) => (
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.UserName}</td>
                                <td>{usr.password}</td>
                                <td>{usr.email}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.pickgender}</td>
                                <td>{usr.year}-{usr.month}-{usr.date}</td>
                                <td>{usr.height}/{usr.weight}</td>
                                <td>< button type="button" className="btn btn-warning" onClick={() => this.editusr(usr, i)}>EDIT</button> </td>
                                <td ><button type="button" className="btn btn-danger" onClick={() => this.deleteusr(usr)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    async componentDidMount(){
        var response=await axios("http://localhost:3002/form2")
        // console.log();
         this.setState({users:response.data})
    }
}

