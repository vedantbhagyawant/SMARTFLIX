import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className= ' w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r to-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className=' py-6 text-lg w-1/3'>{overview}</p> 
        <div>
          <button className='bg-white px-9 py-2 text-lg text-black rounded-lg hover:bg-opacity-70 '>▶Play</button>
            <button className='mx-2 bg-gray-500 px-9 py-2 text-lg text-white rounded-lg bg-opacity-70 '> More Info</button>
        </div>
    </div> 
  )
}

export default VideoTitle