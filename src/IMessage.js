import React from 'react'
import Chat from './Chat'
import "./IMessage.css"
import SideBar from './SideBar'

export default function IMessage() {
    return (
        <div className="imessage">
            <SideBar/>
            <Chat/>
        </div>
    )
}
