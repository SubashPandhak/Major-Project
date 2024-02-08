import React from 'react'

const HeroSec = ({bgImg, imgClass}) => {
  return (
    <>
        <div className='absolute w-full h-full' >
            <div className='relative w-full h-full' >
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-[#0c0c0ce3] via-[#0c0c0c52] via-70% z-[3]' ></div>
                <img src={bgImg} className={`w-full h-full object-cover object-top brightness-75 ${imgClass}`}/>
            </div>
        </div>
    </>
  )
}

export default HeroSec