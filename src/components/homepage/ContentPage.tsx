import React, { Fragment } from 'react'
import HeaderTop from '../header/Header'
import Layout from '../layouts/Layout'
import AboutMe from '../Content/AboutMe'

function ContentPage() {
  return (
    <Fragment>
      <AboutMe />
      <Layout>
      </Layout>
    </Fragment>
  )
}

export default ContentPage