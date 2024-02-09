import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
    
            <div className='formWrapper'>
                <span className='Logo'>Big Whale Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password'/>

                    <button> Sign In </button>
                    <p>You don't have an account? Register </p>
                </form>
            </div>
        </div>
      )
    }
    

export default Login