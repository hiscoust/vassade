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
  description: "Ihr Generalunternehmer und Fachbetrieb für energieeffiziente Fassadendämmung, individuelle Putzarten und modern-rustikale Klinkerriemchen."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (

    <html lang="de" className='scroll-smooth'>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <link rel='preload' href='/assets/logo_weiss.png' type='image/png' />
      </head>
      <body className={inter.className}>
        {/* Desktop Navbar */}
        <ReduxProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
