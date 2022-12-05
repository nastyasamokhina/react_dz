import React, {useState} from "react";

export default function MessageForm({addNewMessage}) {
    const [message, setMessage] = useState('')
    const [author, setAuthor] = useState('')

    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            addNewMessage({author: author, message: message})
        }}>
            <label>
                Сообщение:
                <input type="text"
                       value={message}
                       onChange={(e) => setMessage(e.target.value)} />
            </label>
            <label>
                Автор:
                <input type="text"
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}