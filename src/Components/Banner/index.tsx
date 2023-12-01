import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/words-test')
    }

  return (
    <button onClick={handleClick} className='w-full flex bg-cyan-400 p-20 rounded-md'>
        <div className='flex text-white text-2xl'>
            <p>MZ-단어 테스트</p>
        </div>
    </button>
  )
}

export default Banner