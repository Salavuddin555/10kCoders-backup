

import { Component } from "react";

export class Form3 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                usrname: "",
                password: "",
                email: "",
                gender: "",
                pickgender: "",
                year:"",
                month:"",
                date:"",
                height:"",
                weight:""
            },
            allusrs: [],
            editIndex:null

        }
    }

    handleusr = (e) => {
        console.log(this.state.person)
        var newPerson = { ...this.state.person }
        newPerson[e.target.name] = e.target.value
        this.setState({ person: newPerson })
    }

    clearForm=()=>{
      var  newForm= {
            usrname: "",
            password: "",
            email: "",
            gender: "",
            pickgender: ""
        }
        this.setState({person:newForm})
    }

    addusr = () => {
        var newusr = [...this.state.allusrs]
        newusr.push(this.state.person)
        this.setState({ allusrs: newusr })
        this.clearForm()
    }

    editusr = (usr,i) => {
this.setState({person:usr,editIndex:i})
    }

    deleteusr = (usr) => {
      var deleteUser=this.state.allusrs.filter((myusr)=> myusr.email !== usr.email)
      this.setState({allusrs:deleteUser})
    }


    updateusr=()=>{
    var latestUser=[...this.state.allusrs]
    latestUser[this.state.editIndex]=this.state.person
    this.setState({allusrs:latestUser,editIndex:null})
    this.clearForm()
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="usrname" value={this.state.person.usrname} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={this.state.person.password} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Email Address:</label>
                    <input type="email" name="email" value={this.state.person.email} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <select name="gender" value={this.state.person.gender} onChange={(e) => this.handleusr(e)}>
                        <option >Select</option>
                        <option >I am a Women </option>
                        <option >I am a Man</option>
                    </select>
                    <br /><br />
                    <select name="pickgender" value={this.state.person.pickgender} onChange={(e) => this.handleusr(e)}>
                        <option >Select</option>
                        <option >I want to find Man</option>
                        <option >I want to find Women</option>
                    </select>
                    <br /><br />
                    <label htmlFor="">Date of Birth:</label>
                    <input type="number" name="year" placeholder="year"  max={2022} min={1990}  value={this.state.person.year} onChange={(e) => this.handleusr(e)}/>
                    <input type="number" name="month" placeholder="month" max={12} min={1}  value={this.state.person.month} onChange={(e) => this.handleusr(e)}/>
                    <input type="number" name="date" placeholder="date" max={31} min={1} value={this.state.person.date} onChange={(e) => this.handleusr(e)}/>
                    <br /><br />
                    <label htmlFor="">Height/Weight:</label>
                    <select name="height" value={this.state.person.height} onChange={(e) => this.handleusr(e)}>
                        <option >Height</option>
                        <option >5.3</option>
                        <option >5.4</option>
                        <option >5.6</option>
                        <option >5.7</option>
                        <option >5.8</option>
                    </select>
                    <select name="weight" value={this.state.person.weight} onChange={(e) => this.handleusr(e)}>
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
                        <th>User Name</th>
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
                        {this.state.allusrs.map((usr, i) => (
                            <tr key={i}>
                                <td>{usr.usrname}</td>
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
        )
    }
} 
