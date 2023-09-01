import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className="bg-white text-black px-12 p-4 rounded-md text-xl font-bold hover:bg-opacity-80">Play</button>
            <button className='bg-gray-500 text-white px-7 p-4 rounded-md mx-2 bg-opacity-50 text-xl font-bold hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle