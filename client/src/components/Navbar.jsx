import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-60 py-8'>
      <div className='h-10 w-auto bg-white/30 backdrop-blur-md shadow-md rounded-full flex justify-center items-center'>
        <ul className='flex gap-20 font-fancy font-bold text-lg text-white'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/battle"}>Battle</Link></li>
          <li><Link to={"/leaderboards"}>LeaderBoards</Link></li>
          <li><Link to={"/profile"}>Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
