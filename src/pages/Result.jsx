import React from 'react'
import NavBar from '../components/NavBar'
import HeroSec from '../components/HeroSec'
import bgImg from "../assets/dfsd.webp" 
import { useNavigate } from 'react-router-dom'

const Result = () => {

    const nav = useNavigate()

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-end' >
        <NavBar />
        <HeroSec bgImg={bgImg} />
        <div className='relative z-[10] w-[70%] flex flex-col gap-3 mb-[20px]' >
            <div className='px-5' >
                <div className='text-white text-2xl'>CROP PREDICTED</div>
                <div className='text-4xl text-default_prm'>WHEAT</div>
            </div>
            <div className='text-white p-5 bg-[#f4ede525] rounded-lg' >
                <div className='text-2xl' >SUGGESTIONS</div>
                <div className='text-lg' >The N value of your soil is low.</div>
            </div>
            <div className='text-white p-5 bg-[#f4ede525] rounded-lg' >
                <div className='text-2xl' >CONSIDER FOLLOWING SUGGESTIONS</div>
                <div className='text-lg w-[95%] p-5' >
                    <ol type='1' className='list-decimal flex flex-col gap-2' >
                        <li>
                        Add sawdust or fine woodchips to your soil – the carbon in the sawdust/woodchips love nitrogen and will help absorb and soak up and excess nitrogen.
                        </li>
                        <li>
                        Use NPK fertilizers with high N value.
                        </li>
                        <li>
                        Water – soaking your soil with water will help leach the nitrogen deeper into your soil, effectively leaving less for your plants to use.
                        </li>
                    </ol>
                    <div className='w-full flex justify-end mt-10' >
                        <button className='px-5 py-2 bg-default_prm rounded-lg' 
                            onClick={() => {
                                nav("/")
                            }}
                        >GO BACK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result