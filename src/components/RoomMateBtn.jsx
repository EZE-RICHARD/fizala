import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import './styles/btn.scss'

const RoomMateBtn = () => {
  return (
    <button className='btn btn-warning text-white d-flex align-items-center gap-2 fontSize'><HiMiniUsers />Roommate Matching</button>
  )
}

export default RoomMateBtn
