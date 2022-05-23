import React, { useEffect, useState } from 'react'
import SignOut from "./SignOut.js"
import { auth, db } from "../firebase.js"
import SendMessages from "./SendMessage.js"

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);

    return (
        <div>
            {console.log(messages)}
            <SignOut />
            <div className='msgs'>
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${ uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages />
        </div>
    );
}

export default Line