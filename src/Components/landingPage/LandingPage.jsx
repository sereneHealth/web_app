import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { HeroPage } from './heropage/HeroPage'
import MissionVission from './missionVission/MissionVission'
import Services from './services/Services'

export const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <HeroPage/>
    <MissionVission/>
    <Services/>
    <Footer/>
    </>
  )
}
