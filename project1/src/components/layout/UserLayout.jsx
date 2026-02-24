import React from 'react'
import Header from '../common/Header.jsx'
import FooterSection from '../common/FooterSection.jsx'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  )
}

export default UserLayout
