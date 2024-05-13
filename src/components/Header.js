import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo1, Supported_Lang } from '../utils/constant';
import { toggleGptSearhView } from '../utils/gptSlice';
import lang from '../utils/languageConstant';
import { changeLanguage } from '../utils/configSlice';

// import lang from '../utils/languageConstant';

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
  
  const handleGPTSearchClick =  () => { 
    dispatch(toggleGptSearhView());
      

  }
  const handleChangeLanguage = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  const gptSearch = useSelector(store => store.gpt.showGptSearch)





  return ( 
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
        <img src={Logo1}
        alt='logo' className='w-44' ></img>
        {user && (
         
         


        <div className='flex p-5'>

         { gptSearch &&
         <select className='px-2 py-2 my-2 mx-3 rounded-lg bg-black text-white'onChange={handleChangeLanguage}>
          {Supported_Lang.map(lang => <option key={lang.identifier} value={lang.identifier}   >{lang.name}</option>

           )}
          </select>}
          <button onClick={handleGPTSearchClick} className='text-white bg-purple-950 px-2 py-2 my-2 mx-3 rounded-lg'>
           {gptSearch? "HomePage": "GPT Search" }
          </button>
         { !gptSearch &&
          <img alt='usericon' src={user?.photoURL} className='w-12 h-12'></img>
          }
        <button  onClick={handleSignOut} className='p-2 font-bold text-white'>{!gptSearch && "Sign Out"}</button>
        
        </div>
        )}
    </div>
        
    
  )
}

export default Header