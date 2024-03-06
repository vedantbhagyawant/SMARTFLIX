import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user =  useSelector((store) => store.user);
   const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      
    }).catch((error) => {
  
    });
    
   }
  return ( 
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo' className='w-44' ></img>
        {user && (
        <div className='flex p-5'>
          <img alt='usericon' src={user?.photoURL} className='w-12 h-12'></img>
          
        <button onClick={handleSignOut} className='p-2 font-bold'>(Sign Out)</button>
        
        </div>
        )}
    </div>
        
    
  )
}

export default Header