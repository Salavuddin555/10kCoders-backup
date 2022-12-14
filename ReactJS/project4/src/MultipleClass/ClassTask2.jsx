import { Component } from "react";

export class ClassTask2 extends Component{
    constructor(){
        super()
        this.state={
            fname:"Salavuddin",
            employee:{
                fname:"Salavuddin",
                lname:"SK",
                id:123445,
                joining:"12-sep-2022"
            },
            colleagues:["Lokesh","Sundar","Srinu"]
        }
    }
    render(){
        return <div>
            <h1>Hello from ClassTask2 {this.state.fname} </h1>
            <hr />
            <ul>
                {/* <h3><li>{this.state.employee.fname}</li></h3>
                <h3><li>{this.state.employee.lname}</li></h3> */}
                {Object.values(this.state.employee).map((value)=>{
                    return <li>{value}</li>
                })}
            </ul>
            <ul>
                
                    {this.state.colleagues.map((val)=>{
                        return <li>{val}</li>
                    })}
                
            </ul>
        </div>
    }
}