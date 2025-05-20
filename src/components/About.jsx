import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div 
       initial={{opacity:0,x:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about Properties ,dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
           <div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full px-4 sm:px-6 2xl:pr-28'>
              <div className="text-center">
                <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>10+</p>
                <p className='text-xs sm:text-sm'>Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>12+</p>
                <p className='text-xs sm:text-sm'>Projects Completed</p>
              </div>
              <div className="text-center">
                <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>20+</p>
                <p className='text-xs sm:text-sm'>Mn.Sq.Ft.Delivered</p>
              </div>
              <div className="text-center">
                <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>25+</p>
                <p className='text-xs sm:text-sm'>Ongoing Projects</p>
              </div>
            </div>
          <p className='my-10 max-w-lg'>Real estate involves buying, selling, and renting land, homes, and commercial properties. It drives economic growth, offering housing, business spaces, and investment opportunities. Location, market trends, and regulations influence property values. Agents and technology, like virtual tours, streamline transactions. Whether for living, renting, or investing, real estate remains key to financial stability.</p>
          <button className='bg-blue-500 text-white px-8 py-2 rounded'>Learn more</button>
          </div>
        </div>
    </motion.div>
  )
}

export default About