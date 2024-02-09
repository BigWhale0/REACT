import React from 'react'
import Add from '../assets/AddF.png'
import Cam from '../assets/Cam.png'
import More from '../assets/More.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>
          Adeteju
        </span>
        <div className="chatIcons">
         <img src={Cam} alt="" />
         <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        
         </div>
       <Messages />
       <Input />
    </div>
  )
}

export default Chat