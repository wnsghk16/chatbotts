import React,{Component} from "react";

export default class Clock extends Component{
    public state = {time:""}
    public tick=()=>{
        setInterval(this.tick, 1000);
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    public render() {
        return <div>
            <h2>It is {this.state.time}.</h2>
            <button onClick={this.tick}>클릭</button>
        </div>
    }
}