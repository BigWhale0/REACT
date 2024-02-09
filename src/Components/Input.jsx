import React from 'react'
import Attach from '../assets/attachment.png'
import Img from '../assets/img.png'

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
        <div className='send'>
            <img src={Attach} alt="" />
            <input type="file" style={{display: 'none'}} id='file' />
            <label htmlFor="file">
                <img src={Img} alt="" />
                <button>Send </button>
            </label>
        </div>
    </div>
  )
}

export default Input