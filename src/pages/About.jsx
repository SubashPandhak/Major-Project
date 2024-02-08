import React from 'react'
import NavBar from '../components/NavBar'
import HeroSec from '../components/HeroSec'
import bgImg from "../assets/gwheat.jpg"
import { CaretDown } from "@phosphor-icons/react"

import abtImg from "../assets/owheat.webp"
import AboutInfoHolder from '../components/AboutInfoHolder'

const About = () => {
  return (
    <div className='snap-y snap-mandatory h-[100vh] overflow-auto' >
        <div className='snap-start relative flex justify-center items-center w-[100vw] h-[100vh]'  >
            <NavBar />
            <HeroSec bgImg={bgImg} />
            <div className='relative z-[5] text-white w-2/3 text-3xl text-center' >
                CropAI revolutionizes agriculture by offering precise
                 crop recommendations and tailored fertilizer suggestions
                  based on soil analysis, climate conditions, and historical
                  data. With an intuitive interface, farmers can access
                   real-time insights, enabling informed decision-making for
                    optimal crop yields and sustainable farming practices.
            </div>
            <div className='absolute bottom-10 text-white animate-bounce '  >
            <CaretDown size={32} />
            </div>
           
        </div>
        <div className="snap-start  shrink-0">
            <AboutInfoHolder img={abtImg} title={"Crops"} content={`
                Nepal's agricultural canvas showcases crops like wheat, maize,
                 and millet, reflecting the nation's ecological diversity.
                  Embracing traditional wisdom, farmers cultivate these staples,
                   fostering resilience and food security in the Himalayan foothills.
            `} />
            <AboutInfoHolder reverse={true} img={abtImg} title={"Fertilizer."} content={`
                Fertilizers in Nepal are a cornerstone of agriculture,
                 enhancing soil fertility for crops like paddy and vegetables.
                  Local farmers judiciously utilize both organic and synthetic
                  fertilizers, striking a balance for sustainable and bountiful harvests.
            `} />
            <div className='h-[100px] w-full' ></div>
        </div>
    </div>
  )
}

export default About