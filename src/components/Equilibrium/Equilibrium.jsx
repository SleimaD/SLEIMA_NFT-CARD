import React from 'react'
import Info from '../../components/Infos/infos'
import Equi from '../../assets/image-equilibrium.jpg'
import Eth from '../../assets/icon-ethereum.svg'
import Avatar from '../../assets/image-avatar.png'
import Clock from '../../assets/icon-clock.svg'
import Eye from '../../assets/icon-view.svg'


export default function Equilibrium() {
  return (
    <div className="card-image w-full flex justify-center mb-8 relative">
    <img className='w-[90%] max-[400px]:w-[70%] rounded-lg transition duration-300' src={Equi} alt="Equilibrium" />
    <div className="absolute inset-0 bg-[#00fff8] rounded-lg opacity-0 active:opacity-70 transition-opacity duration-300"></div>
    <img className='view absolute  top-24 active:block  duration-300 z-5' src={Eye} alt="" />
    
  </div>
)
}
