import React from 'react'

const AboutInfoHolder = ({title, content, img, reverse}) => {
  return (
    <div  className='flex flex-col items-center py-10'>
            <div style={{flexDirection: `${reverse ? "row-reverse" : "row"}`}} className='flex  gap-15 w-full justify-center gap-[100px] mt-32'>
                <div className='flex flex-col justify-center w-1/3'>
                    <div className='text-2xl' >{title}</div>
                    <div className='text-lg font-light' >{content}</div>
                </div>
                <div className='w-[500px] h-[300px] rounded-md overflow-hidden' >
                    <img src={img} />
                </div>
            </div>
        </div>
  )
}

export default AboutInfoHolder