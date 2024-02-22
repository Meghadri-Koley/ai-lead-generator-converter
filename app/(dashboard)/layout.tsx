import DashboardNavbar from '@/components/DashboardNavbar';
import React from 'react'

function DashboardLayout({
    children,
}:{
    children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-full w-full'>
        <DashboardNavbar />
        {children}
    </div>
  )
}

export default DashboardLayout