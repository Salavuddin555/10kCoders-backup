import { Component } from "react";

export class ClassTask10 extends Component{
    constructor(){
        super()
        this.state={
            Umpires:"Billi",
            team:{
                Batsman:"Virat",
                Bowler:"Jadeja"
            },
            allrounders:["Sundar","Ramcharan","Yamini"]

        }
    }
    
    render(){
        return <div>
            <h1>Hello from team</h1>
            {this.state.Umpires}
            <hr />
            <ul>
                {/* {this.state.team.Batsman} <br />
                {this.state.team.Bowler} */}
                {Object.values(this.state.team).map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <hr />
            <ul>
                {/* {this.state.allrounders[0]} */}
                {this.state.allrounders.map((value)=>{
                    return <li>{value}</li>
                })}
            </ul>
        </div>
    }
}