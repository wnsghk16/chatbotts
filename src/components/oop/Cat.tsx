import React,{Component} from "react";

export default class Cat extends Component{
    public state = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'HelloName Cat',
            avatarUrl: 'https://lh3.googleusercontent.com/proxy/kqq_RtHLx9iUztuSfQ7fk0xg_yQ4gtrkQLRVlnUdsO68hLJrzgBRcDcvAuhylnn-lGcOUjRX8Nh5xGXyWReUC_juwx7wb51BN86PK7y7UswpLGzi-p6XTcmojgSDSdQ'
        },
    }
    public formatDate=(date)=>{
        return date.toLocaleDateString();
    }
    public render() {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img
                        className="Avatar"
                        src={this.state.author.avatarUrl}
                        alt={this.state.author.name}
                    />
                    <div className="UserInfo-name">
                        {this.state.author.name}
                    </div>
                </div>
                <div className="Comment-text">{this.state.text}</div>
                <div className="Comment-date">
                    {this.formatDate(this.state.date)}
                </div>
            </div>
        );
    }

}