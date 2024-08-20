import React from 'react'
import userId from '/src/assets/man.jpeg'
import './styles/MiniProfile.scss'

const MiniProfile = () => {
  return (
    <div className='miniProfile rounded p-2'>
      <div className='imgFrame'>
        <img src={userId} alt="" />
        <div className='userStatus'></div>
      </div>
      <div className='d-flex flex-column username'>
        <span>Micheal</span>
        <small>Chinedu</small>
      </div>
    </div>
  )
}

export default MiniProfile
