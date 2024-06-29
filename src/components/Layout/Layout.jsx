import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
   <>
    <Header/>
    <div id="children">{children}</div>
    <Footer/>
   </>
  )
}
