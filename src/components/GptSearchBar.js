import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
   const langKey = useSelector(store => store.config.lang);
   console.log(langKey);


  return (
    <div className='pt-[10%] flex justify-center  '> 
        <form className=' bg-black w-1/2 grid grid-cols-12 justify-center '>
            <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} className=' py-2 bg-white col-span-9 m-2' ></input>
            <button className='bg-red-700  py-2 px-3 m-2 col-span-3'>{lang[langKey].search}</button>
        </form> 
    </div>
  )
}

export default GptSearchBar