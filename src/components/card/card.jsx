import React from 'react'
import './card.css'
import Equi from '../../assets/image-equilibrium.jpg'
import Eth from '../../assets/icon-ethereum.svg'
import Avatar from '../../assets/image-avatar.png'
import Clock from '../../assets/icon-clock.svg'
import Eye from '../../assets/icon-view.svg'



export default function card() {
  return (
    // <div>card</div>
    <div className="card  flex flex-col justify-center items-center text-white rounded-xl p-4 shadow-2xl  bg-[#15273f] w-[18rem] cursor-pointer max-[400px]:h-[90%]">
      <div className="card-image w-full flex justify-center mb-8 relative">
        <img className='w-[90%] max-[400px]:w-[70%] rounded-lg transition duration-300' src={Equi} alt="Equilibrium" />
        <div className="absolute inset-0 bg-[#00fff8] rounded-lg opacity-0 active:opacity-70 transition-opacity duration-300"></div>
        <img className='view absolute  top-24 active:block  duration-300 z-5' src={Eye} alt="" />
        
      </div>
      <div className="card-info">
        <h1 className="card-title text-xl mb-5 hover:text-[#00fff8]">Equilibrium #3429</h1>
        <p className="card-description text-sm text-gray-400 mb-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="card-pricing flex justify-between mb-6">
          <div className="card-price flex gap-1 items-center">
            <div className='icon'>
                <img src={Eth} alt="" />
            </div>
            <h5 className=' text-[#00fff8] self-center'> 0.041 ETH</h5>
          </div>
          <div className="card-time flex gap-1 items-center">
            <img className='w-[10%] h-[60%]' src={Clock} alt="" />
            <div className=' text-gray-400'>3 days left</div>
          </div>
        </div>
            <hr className='w-[100%] text-gray-800 bg-gray-800 mb-6' />
        <div className="card-creator flex items-center gap-2">
    
            <img className=' rounded-full w-[15%] border-2 border-gray-500' src={Avatar} alt="" />
            
            <div className=' text-blue-200'>          
                Creation of <span className="card-creator-name text-white hover:text-[#00fff8]">Jules Wyvern</span>
            </div>
        </div>
      </div>
    </div>
  
  )
}
