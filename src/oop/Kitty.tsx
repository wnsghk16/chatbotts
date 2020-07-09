import React,{Component} from "react";

export default class Kitty extends Component{
    public state = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://lh3.googleusercontent.com/proxy/x2Ok_zFhRCbw3cJngff1kEwSnXYluC-6MDY71AssQXnE7BebUKCYUwEdkUGi3T9GVn9fMcMROwIQ_fFCjsgbr-GujdhZS7_OuD92kxJddXuWyjNojD7LQnhet7hTySnvDTX_Ul1T'
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