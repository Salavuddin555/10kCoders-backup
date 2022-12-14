import React, { Component } from 'react';

class Form2 extends Component {
    constructor(){
        super()
        this.state={
            Name:"",
            UserName:"",
            Email:"",
            Password:"",
            ConfirmPassword:"",
            Message:""
        }
    }
    handleChange(e){
    //  console.log(e.target.value);
        var newObject = {...this.state}
        newObject[e.target.name]=e.target.value
        this.setState(newObject)
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={this.state.Name} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="">UserName</label>
                    <input type="text" name="username" value={this.state.UserName} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" value={this.state.Email} onChange={(e)=>{this.handleChange(e)}}/> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.Password} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="confirmpassword">ConfirmPassword</label>
                    <input type="password" name="confirmpassword" value={this.state.ConfirmPassword} onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="message">Message</label>
                    <textarea name=""  cols="30" rows="10" value={this.state.Message} onChange={(e)=>{this.handleChange(e)}}/> <br />
                    <button>AddUser</button>
                </form>
            </div>
        );
    }
}

export default Form2;
