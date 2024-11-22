import Contant from '@/components/Contant/page'
import Data from '@/components/Data/page'
import Everywhere from '@/components/Everywhere/page'
import Extantion from '@/components/Extantion/page'
import Navbar from '@/components/Navbar/page'
import Needs from '@/components/Needs/page'
import Plan from '@/components/Plan/page'
import Project from '@/components/Project/page'
import Sponser from '@/components/Sponser/page'
import Work from '@/components/Work/page';
import Favourit from '@/components/Favourit/page';
import Cards from '@/components/Cards/page';
import Footer from '@/components/Footer/page';
import React from 'react'
import Main from '@/components/Main/page'

const Home = () => {
  return (
    <>
    <Navbar />
    <Contant />
    <Project />
    <Work />
    <Extantion />
    <Needs />
    <Plan />
    <Everywhere />
    <Data />
    <Sponser />
    <Favourit />
    <Cards />
    <Footer />
    <Main />
    </>
  )
}

export default Home