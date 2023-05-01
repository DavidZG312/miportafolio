import React, { Fragment } from 'react'
import HeaderTop from '../header/Header'
import Layout from '../layouts/Layout'
import AboutMe from '../Content/AboutMe'
import Portfolio from '../Content/Portfolio'

function ContentPage() {
  return (
    <Fragment>
      <AboutMe />
      <Layout>
        <Portfolio />
      </Layout>
    </Fragment>
  )
}

export default ContentPage