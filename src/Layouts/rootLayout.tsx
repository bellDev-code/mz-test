import React from 'react'
import Header from '@Components/Header'

interface IProps {
    children: React.ReactNode
}

const RootLayout = ({ children }: IProps) => {
  return (
    <div className='w-full h-screen flex flex-col border overflow-hidden'>
      <Header />
      <div className='overflow-hidden h-full w-full relative p-6'>{children}</div>
      {/* <Bottom /> */}
    </div>
  )
}

export default RootLayout