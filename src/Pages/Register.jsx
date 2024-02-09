import React from 'react'
import Add from '../assets/Add.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const Register = () => {

  const handleSubmit =(e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].file[0];

  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    // console.log(e.target[0].value)
  }

  return (
    <div className='formContainer'>

        <div className='formWrapper'>
            <span className='Logo'>Big Whale Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password'/>
                <input className='' style={{display: 'none'}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button> Sign Up </button>
                <p>You do have an account? Login </p>
            </form>
        </div>
    </div>
  )
}

export default Register