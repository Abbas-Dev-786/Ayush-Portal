import React from 'react'
import Navbar from './components/Navbar'
import Carousel from '../landingpage/components/carousel'
import BottomNav from '../../components/common/BottomNav'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'
import Page6 from './components/page6'
import Footer from './components/footer'

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
