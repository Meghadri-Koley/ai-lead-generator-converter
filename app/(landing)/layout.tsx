import React from 'react'
import LandingPageNavBar from './components/LandingPageNavBar'

function layout({
    children,
}:{
    children: React.ReactNode;
}) {
  return (
    <section className='flex min-h-screen flex-col overflow-x-clip'>
        <LandingPageNavBar/>
        <div className='flex-grow'>{children}</div>
    </section>
  )
}

export default layout