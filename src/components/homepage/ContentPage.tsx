import React, { Fragment } from 'react'
import HeaderTop from '../header/Header'
import Layout from '../layouts/Layout'
import AboutMe from '../Content/AboutMe'
import Portfolio from '../Content/Portfolio'
import Skillset from '../Content/Skillset'

function ContentPage() {
  return (
    <Fragment>
      <AboutMe />
      <Layout>
        <Portfolio />
        <Skillset />
      </Layout>
    </Fragment>
  )
}

export default ContentPage