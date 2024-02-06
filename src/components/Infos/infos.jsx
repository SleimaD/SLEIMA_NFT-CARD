import React from 'react'
import Eth from '../../assets/icon-ethereum.svg'
import Avatar from '../../assets/image-avatar.png'
import Clock from '../../assets/icon-clock.svg'



export default function infos() {
  return (
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
)
}
