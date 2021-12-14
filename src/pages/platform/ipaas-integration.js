import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import DemoRequest from '../../components/demoRequest'
import Banner from '../../components/banner'
import imageBanner from '../../assets/images/company/banner.jpg'
import UnderConstruction from '../../components/underConstruction'
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="iPaaS Integration"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner
              title="iPaaS Integration"
              fluid="true"
              image={imageBanner}
            />
            <UnderConstruction />
            <DemoRequest />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
