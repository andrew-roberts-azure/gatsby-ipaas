import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DemoRequest from '../components/demoRequest'
import Banner from '../components/banner'
import UnderConstruction from '../components/underConstruction'
import imageBanner from '../assets/images/company/banner.jpg'
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="About Us"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner title="About Us" fluid="true" image={imageBanner} />
            <UnderConstruction />
            <DemoRequest />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
