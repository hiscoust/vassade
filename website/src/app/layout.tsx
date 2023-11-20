import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReduxProvider from '../components/Redux/ReduxProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "VASSADE",
    template: '%s | VASSADE',
  },
  description: "..."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (

    <html lang="en" className='scroll-smooth'>
      <head>
        {typeof window != "undefined" && (window.location.pathname == "/") &&
          <link rel='preload' as='video/mp4' href="/assets/vassade_vtitle.mp4" />}
      </head>
      <body className={inter.className}>
        {/* Desktop Navbar */}
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
