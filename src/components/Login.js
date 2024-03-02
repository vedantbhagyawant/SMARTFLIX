import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true);

   const toggleSignButton = () => {
    setIsSignInForm(!isSignInForm);
}
    
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          alt='No Working img'></img>
          </div>
          <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "SignIn" : "SignUp"}</h1>
            {!isSignInForm &&
            <input 
            className='p-2 my-4 w-full bg-gray-900'
             type='text' placeholder='Name'></input>
            }
            <input 
            className='p-2 my-4 w-full bg-gray-900'
             type='text' placeholder='Email Address'></input>
             <input
             className='p-2 my-4 w-full bg-gray-900'
             type='password' placeholder='Password'></input>
             <button className='p-3 my-6 bg-red-700 rounded-md'>{isSignInForm ?"Sign In":"Sign Up"}</button>
             <p className='py-4 cursor-pointer' onClick={toggleSignButton} >{isSignInForm ?"New!!! Netflix Sign Up Now" : "Already Registered!!!!!!!"}</p>



          </form>
    </div>
  )
}

export default Login