
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar';
import Navbaro from '@/components/navbar/Navbaro';
import Midbox from '@/components/midbox/Midbox';
import Bigimage from '@/components/bigimage/Bigimage';
import Trending from '@/components/trending/Trending';
import Featured from '@/components/featured/Featured';
import Footer from '@/components/footer/Footer';
 // Import Bootstrap JavaScript


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbaro/>
    <Navbar/>
    <Midbox/>
    <Bigimage/>
    <Trending/>
     <Featured/>
     <Footer/>
    </>
  )
}
