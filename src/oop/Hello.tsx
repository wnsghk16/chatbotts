import React, {Component} from "react";

interface HelloProps {
    name:string
}
class Hello extends Component<HelloProps>{
    public state = {name:""}
    props:any
    constructor(props:HelloProps) {
        super(props);
        this.state.name = props.name
    }
    public handClick=()=>{
        this.setState({
            name: `안녕 ${this.props.name}`
        })
    }
    public render() {
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handClick}>Click Me</button>
        </div>;
    }
}

export default Hello