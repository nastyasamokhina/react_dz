import * as React from "react";
import './message.css'

class Message extends React.Component{

    render() {
        return (<h1 className='message'>{this.props.text}</h1>);
    }
}

export default Message