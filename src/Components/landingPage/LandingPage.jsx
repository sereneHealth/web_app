import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { HeroPage } from './heropage/HeroPage'
import MissionVission from './missionVission/MissionVission'
import Services from './services/Services'
import Programes from './programes/Programes'
import ObjectivesSection from './objectivesection/ObjectiveSection'

export const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <HeroPage/>
    <MissionVission/>
    <ObjectivesSection/>
    <Services/>
    <Programes/>
    <Footer/>
    </>
  )
}
