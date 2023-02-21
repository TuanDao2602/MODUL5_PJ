import React from 'react'
import AboutPage from '../about/AboutPage'
import Custom from '../custom/Custom'
import FlastSale from '../flastSale/FlastSale'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Panner from '../header/Panner'
import MenuPage from '../menu/MenuPage'
import BookPage from '../order/BookPage'

export default function Index() {
  return (
    <>
  <div className="hero_area">
  
    
    {/* header section strats */}
   <Header/>
    {/* end header section */}
    {/* slider section */}
    <Panner/>
    {/* end slider section */}
  </div>
  {/* offer section */}
 <FlastSale/>
  {/* end offer section */}
  {/* food section */}
<MenuPage/>
  {/* end food section */}
  {/* about section */}
  <AboutPage/>
  {/* end about section */}
  {/* book section */}
 <BookPage/>
  {/* end book section */}
  {/* client section */}
 <Custom/>
  {/* end client section */}
  {/* footer section */}
  <Footer/>

  </>
  )
}
