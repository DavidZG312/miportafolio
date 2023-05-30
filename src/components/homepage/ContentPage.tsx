import React, { Fragment } from 'react'
import HeaderTop from '../header/Header'
import Layout from '../layouts/Layout'
import AboutMe from '../Content/AboutMe'
import Portfolio from '../Content/Portfolio'
import Skillset from '../Content/Skillset'
import Contact from '../Content/Contact'
import Footer from '../footer/Footer'

function ContentPage() {
  return (
    <Fragment>
      <AboutMe />
      <Layout>
        <Portfolio />
        <Skillset />
        <Contact />
        <Footer />
      </Layout>
    </Fragment>
  )
}

export default ContentPage