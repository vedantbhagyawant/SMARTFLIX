import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo1 } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user =  useSelector((store) => store.user);
   const handleSignOut = () => {
    signOut(auth).then(() => {
    
      
    }).catch((error) => {
  
    });
   }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName,photoURL} = user; 
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/Browse")
       
      } else {
        dispatch(removeUser());
        navigate("/")
        
      }
    });
    
    return () => unsubscribe();
  },[]);





  return ( 
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
        <img src={Logo1}
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