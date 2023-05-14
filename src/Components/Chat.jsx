import React from 'react'
import cam from "../Images/cam.png"
import add from "../Images/add.png"
import more from "../Images/more.png"
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={cam} alt=''></img>
          <img src={add} alt=''></img>
          <img src={more} alt=''></img>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
