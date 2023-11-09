import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-6 md:px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-2xl md:text-6xl'>{title}</h1>
        <p className='hidden md:hidden lg:inline-block py-6 text-lg w-3/4'>{overview}</p>
        <div className='my-4 md:my-4'>
            <button className="bg-white text-black py-1 px-3 md:px-12 md:p-4 rounded-md text-xl font-bold hover:bg-opacity-80">Play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white md:px-10 md:p-4 rounded-md mx-2 bg-opacity-50 text-xl font-bold hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle