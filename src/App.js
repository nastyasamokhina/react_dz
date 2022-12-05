import React, {useEffect, useState} from 'react'
import MessageForm from "./components/messageForm";
import MessageDesk from "./components/message";

function App(){
    const [messageList, setMessageList] = useState([])

    const addNewMessage = (data) => {
        setMessageList([...messageList, data])
    }

    useEffect(()=>{
        if (messageList.length === 0) return
        const lastMessage = messageList[messageList.length-1]
        if (lastMessage.author !== 'c3pio'){
            setTimeout(()=>
                setMessageList([...messageList, {
                    message: `¯\\_(ツ)_/¯ for ${lastMessage.author}`,
                    author: 'c3pio'
                }]), 1500)
        }
    }, [messageList])

    return (
        <>
            <MessageDesk data={messageList}/>
            <MessageForm addNewMessage={addNewMessage}/>
        </>
    );
}

export default App;
