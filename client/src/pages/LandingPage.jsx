import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import backgroundIllus from '../assets/bg-illus.svg'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen" >
      <ParticlesBackground />
      <div className='absolute inset-0 flex flex-col'>
        <Navbar></Navbar>
        <div className="flex flex-1 items-center justify-evenly text-white">
          <div className='flex flex-col items-center font-retro drop-shadow-[0_0px_80.8px_#00FFFF] [text-stroke:2px_#00FFFF]'>  
            <h1 className="text-8xl ">DSA</h1>
            <h2 className='text-7xl '>BATTLE</h2>
            <h2 className='text-7xl'>GROUND</h2>
            <p className='font-fancy text-2xl mt-3'>Code, Think and Battle 1v1 in Real Time </p>
            <button onClick={()=>navigate('/login')} className='transition-transform duration-300 hover:scale-105 mt-5 font-fancy text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Join the Arena</button>
          </div>
          <img src={backgroundIllus} alt="" className='w-[500px]  ' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
