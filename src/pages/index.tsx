import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GlobalStyles } from '../styles/global'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <GlobalStyles />
   <div>
    Hello Hercules
   </div>
    </>
  )
}
