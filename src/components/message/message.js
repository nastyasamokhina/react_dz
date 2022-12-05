import * as React from "react";
import './message.css'

export default function MessageDesk({data}){


    return (
        <div>
            {data.map((item, id) => (
                <p>
                    <h3>{id}. {item.message}</h3>
                    Написал: {item.author}
                    <hr/>
                </p>
            ))}
        </div>
    );

}

