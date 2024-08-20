import React from 'react'
import { FaPowerOff } from "react-icons/fa6";
import './styles/btn.scss'



const LogOutBtn = () => {
  return (
    <button className='btn btn btn-outline-dark d-flex align-items-center gap-2 logBtn'><FaPowerOff />Logout</ button>
  )
}

export default LogOutBtn
