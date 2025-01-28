import React from 'react'
import '@/assets/globals.css'

export const metadata = {
    title: 'Property search',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property for you'
}

function MainLayout({ children }) {
  return (
    <html>
        <body>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout