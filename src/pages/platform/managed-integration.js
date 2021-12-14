import React, { Component } from 'react'
import Layout from '../../components/layout'
import DemoRequest from '../../components/demoRequest'
import SEO from '../../components/seo'
import Banner from '../../components/banner'
import imageBanner from '../../assets/images/company/banner.jpg'
import UnderConstruction from '../../components/underConstruction'
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Managed Integration"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner
              title="Managed Integration"
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
