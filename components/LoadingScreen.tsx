import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader';

function LoadingScreen() {
  return (
    <div className='z-50 h-screen w-screen flex items-center justify-center bg-white bg-opacity-30'>
        <div className='relative flex flex-col items-center justify-center'>
            <div className='z-10 text-5xl font-bold text-purple-600 mb-5'>
                LeadConvert
            </div>
            <BounceLoader color = "rgba(168,85,247,1)" speedMultiplier = {1.5} />

        </div>

    </div>
  )
}

export default LoadingScreen