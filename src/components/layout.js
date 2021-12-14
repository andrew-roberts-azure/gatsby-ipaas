import React from 'react'
import '../assets/scss/libs/fonts.scss'
import '../assets/scss/main.scss'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Topnav from './topnav'
import HeaderSearch from './header-search'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <HeaderSearch />
    <div className="bg-white" id="search-nav">
      <Topnav />
      <Navbar />
      {children}
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
