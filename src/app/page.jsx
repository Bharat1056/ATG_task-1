import React from 'react'
import Navbar from './_components/Navbar/Navbar'
import Auth from './_components/auth/auth'
import LandingContent from './_components/landingcontent/landingcontent'
import Frame1 from './_components/Frame1/Frame1'
import Frame2 from './_components/Frame2/Frame2'
import Frame3 from './_components/Frame3/Frame3'
import Frame4 from './_components/Frame4/Frame4'
import Frame5 from './_components/Frame5/Frame5'
import Frame6 from './_components/Frame6/Frame6'
import Footer from './_components/Footer/Footer'
import ScrollToTop from './_components/ScrollToTop/ScrollToTop'

const Page = () => {
  return (
    <main>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col items-center justify-center xl:flex-row p-5 justify-evenly gap-5 lg:gap-[100px] mt-[20px] sm:mt-[50px] lg:mt-[70px]'>
          <LandingContent />
          <Auth />
          <div className='xl:hidden flex flex-row justify-center items-center flex-wrap'>
            <img src="/people1.png" alt="People 1" className='w-[166px] md:[240px] lg:w-[205px] xl:w-[300px] object-cover rounded-lg' style={{ height: 'auto' }} />
            <img src="/people2.png" alt="People 2" className='w-[166px] md:[240px] lg:w-[205px] xl:w-[300px] object-cover rounded-lg' style={{ height: 'auto' }} />
          </div>
        </div>
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame6 />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  )
}

export default Page;
