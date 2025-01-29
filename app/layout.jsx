import React from 'react'
import '@/assets/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Property search',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property for you'
}

function MainLayout({ children }) {
  return (
    <html>
        <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
  )
}

export default MainLayout