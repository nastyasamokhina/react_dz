import React from 'react'
import Message from "./components/message/message";

class App extends React.Component{
    data = 'Как дела?'

    render() {
        return (<Message text={this.data}/>);
    }
}

export default App;
