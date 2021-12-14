import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Partners from '../components/partnerSection'
import DemoRequest from '../components/demoRequest'
import IntegrationSec from '../components/integrationSec'
import TopSlide from '../components/topSlide'
import InfoBar from '../components/infoBar'
import SVGLoader from '../components/loader'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { globalHistory } from '@reach/router'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const GATSBY_APP_URL = process.env.GATSBY_APP_URL

class App extends Component {
  state = {
    page_data: {
      metatag: { value: { title: null, description: null, abstract: null } },
      field_banner: [{ url: null }],
      title: [{ value: null }],
      body: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      field_two_columns_description: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      field_two_columns_title_descript: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      page_body_content: null,
      field_two_columns_description_content: null,
      field_two_columns_title_descript_content: null,
    },
    persona_class: null,
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/pages/get_page_by_url?pageurl=/front-page')
      .then(res => {
        const page_data = res.data[0]
        this.setState({ page_data })

        if (
          typeof page_data !== 'undefined' &&
          typeof page_data.body[0].processed !== 'undefined'
        ) {
          const page_body_content = page_data.body[0].processed.replace(
            /src="\//g,
            `src="${CMS_URL}/`
          )
          this.setState({ page_body_content })
          document.getElementsByClassName('leadershipHolderLoader')[0].remove()
        }

        if (
          typeof page_data !== 'undefined' &&
          typeof page_data.field_two_columns_description[0].processed !==
            'undefined'
        ) {
          const field_two_columns_description_content = page_data.field_two_columns_description[0].processed.replace(
            /src="\//g,
            `src="${CMS_URL}/`
          )
          this.setState({ field_two_columns_description_content })
        }

        if (
          typeof page_data !== 'undefined' &&
          typeof page_data.field_two_columns_title_descript[0].processed !==
            'undefined'
        ) {
          const field_two_columns_title_descript_content = page_data.field_two_columns_title_descript[0].processed.replace(
            /src="\//g,
            `src="${CMS_URL}/`
          )
          this.setState({ field_two_columns_title_descript_content })
        }
      })
      .catch(error => {
        // console.log(error.response)
      })
  }

  render() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')

    return (
      <>
        <Layout>
          <SEO
            url={GATSBY_APP_URL}
            title={this.state.page_data.metatag.value.title}
            image={
              CMS_URL +
              '/sites/default/files/2020-06/ipaas_seo_preview_home_page.jpg'
            }
            description={this.state.page_data.metatag.value.description}
          />

          <InfoBar />
          <main className="home">
            <TopSlide />
            <div className="partnerLeadershipHolder">
              <h6>Featured Partners</h6>
              <Partners />

              <Container>
                <div className="content leadershipHolder default-link ">
                  <SVGLoader loaderClass="leadershipHolderLoader" />
                  <div
                    className="page_body_content leadershipContent transformation"
                    dangerouslySetInnerHTML={{
                      __html: this.state.page_body_content,
                    }}
                  />
                </div>
              </Container>

              {/* <LeadershipTeam /> */}
            </div>
            {/* <Services /> */}
            <div className="sideBySide_Z whyipaasHolder mt-5 customHeading">
              <div
                className="field_two_columns_description no-bg default-link"
                dangerouslySetInnerHTML={{
                  __html: this.state.field_two_columns_description_content,
                }}
              />
            </div>
            <IntegrationSec />

            {/* <Testimonial /> */}
            <DemoRequest />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
