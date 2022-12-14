import { Component } from "react";

export class ClassTask6 extends Component{
    constructor(){
        super()
        this.state={
            team:{
                Batsman:"Virat",
                Bowler:"Jasprith",
                Allrounder:"Jadeja"
            },
            umpires:["Billi","Bowden","Nitin"]
        }
    }
    render(){
        return <div>
            <h3>Hello from team6</h3>
            <ul>
            {this.state.umpires.map((value)=>{
                return  <li>{value}</li>
            })}
            </ul>
            <ul>
                <li>{this.state.team.Batsman}</li>
                <li>{this.state.team.Bowler}</li>
            </ul>
            <ul>
                {Object.values(this.state.team).map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
        </div>
    }
}