import React from 'react'
import Navbar from '../../components/home/Navbar'
import Carousel from '../../components/home/carousel'
import BottomNav from '../../components/common/BottomNav'
import Page2 from '../../components/home/page2'
import Page3 from '../../components/home/page3'
import Page4 from '../../components/home/page4'
import Page5 from '../../components/home/page5'
import Page6 from '../../components/home/page6'
import Footer from '../../components/home/footer'

const Landingpage = () => {
  return (
    <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
        <Page6></Page6>
        <Footer></Footer>
        <BottomNav></BottomNav>
    </>
  )
}

export default Landingpage
