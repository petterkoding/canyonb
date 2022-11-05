import React from 'react'
import Nav from '../nav/Nav'


const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <main className="min-h-screen bg-white">
            {children}
        </main>
       
    </>
  )
}

export default Layout