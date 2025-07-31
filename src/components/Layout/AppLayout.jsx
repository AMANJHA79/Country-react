import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../ui/Headers'
import Footers from '../ui/Footers'

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Headers/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footers/>
    </div>
  )
}

export default AppLayout