import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Logo, photoUrl } from '../utils/constant';



const Login = () => {
  const dispatch = useDispatch();

 

    const[isSignInForm,setIsSignInForm] = useState(true);
    const[errorMessage,setErrMessage] = useState(null);

   const toggleSignButton = () => {
    setIsSignInForm(!isSignInForm); 
}
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
const handleButtonClick = () =>{
    

  const message =  checkValidData(email.current.value,password.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(message);

// setErrMessage(message);
if(message) return;

if(!isSignInForm){
  
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: photoUrl
    }).then(() => {
     
      const {uid,email,displayName,photoURL} = auth.currentUser; 
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
     
     
    }).catch((error) => {
      setErrMessage(errorMessage);
    });
    console.log(user);
    
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setIsSignInForm(errorCode + " " + errorMessage);
    // ..
  });

}
else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
     console.log(user);
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode + " " + errorMessage);
  });
}

}
     
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src= {Logo}
          alt='No Working img'></img>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
            <input ref={name}
            className='p-2 my-4 w-full bg-gray-900'
             type='text' placeholder='Name'></input>
            }
            <input ref={email}
            className='p-2 my-4 w-full bg-gray-900'
             type='text' placeholder='Email Address'></input>
             <input ref={password}
             className='p-2 my-4 w-full bg-gray-900'
             type='password' placeholder='Password'></input>
             <p className='text-red-500 text-xl p-2 font-semibold'>{errorMessage}</p>
             <button className='p-3 my-6 bg-red-700 rounded-md' onClick={handleButtonClick}>{isSignInForm ?"Sign In":"Sign Up"}</button>
             <p className='py-4 cursor-pointer' onClick={toggleSignButton} >{isSignInForm ?"New!!! Netflix Sign Up Now" : "Already Registered!!!!!!!"}</p>



          </form>
    </div>
  )
}

export default Login