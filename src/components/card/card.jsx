import React from 'react'
import './card.css'
import Info from '../../components/Infos/infos'
import Equilibrium from '../Equilibrium/Equilibrium'
import Equi from '../../assets/image-equilibrium.jpg'
import Eth from '../../assets/icon-ethereum.svg'
import Avatar from '../../assets/image-avatar.png'
import Clock from '../../assets/icon-clock.svg'
import Eye from '../../assets/icon-view.svg'



export default function card() {
  return (

    <div className="card  flex flex-col justify-center items-center text-white rounded-xl p-4 shadow-2xl  bg-[#15273f] w-[18rem] cursor-pointer max-[400px]:h-[90%]">

      
      <Equilibrium />

      <Info />

    </div>
  
  )
}
