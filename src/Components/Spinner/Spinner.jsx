import React from 'react'

const Spinner = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white/20 z-50'>
        <div className='w-10 h-10 border-8 border-t-8 border-t-yellow-400 animate-spin rounded-full p-8'></div>
    </div>
  )
}

export default Spinner