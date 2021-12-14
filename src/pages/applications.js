import React, { Component } from 'react'
import { globalHistory } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DemoRequest from '../components/demoRequest'
import Banner from '../components/banner'
import imageBanner from '../assets/images/platformOverview.jpg'
import { Container, Row } from 'react-bootstrap'
import GenCol from '../components/genCol'
import axios from 'axios'
import ClassicSearch from '../components/classicSearch'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/applications')

class App extends Component {
  state = {
    supprting_apps_data: [],
    page_data: {
      metatag: { value: { title: null, description: null, abstract: null } },
      field_banner: [{ url: null }],
      field_banner_title: [{ value: null }],
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
    },
  }

  componentDidMount() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const page_seg_one = url_segs[1]
    const page_seg_two = url_segs[2]
    var page_url_to_call
    if (typeof page_seg_two !== 'undefined' && page_seg_two.length >= 1) {
      page_url_to_call = '/' + page_seg_one + '/' + page_seg_two
    } else {
      page_url_to_call = '/' + page_seg_one
    }

    axios
      .get(CMS_API_URL + 'v1/pages/get_page_by_url?pageurl=' + page_url_to_call)
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
        }
      })
      .catch(error => {
        // console.log(error.response)
      })

    axios
      .get(CMS_API_URL + 'v1/apps/supported_application')
      .then(res => {
        const supprting_apps_data = res.data
        this.setState({ supprting_apps_data })
        document.getElementsByClassName('applicationsLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            url={page_url}
            title={this.state.page_data.metatag.value.title}
            image={this.state.page_data.field_banner[0].url}
            description={this.state.page_data.metatag.value.description}
          />
          <main>
            <Banner
              title={this.state.page_data.field_banner_title[0].value}
              fluid="true"
              image={this.state.page_data.field_banner[0].url}
            />
            <div className="partnerSec secPad">
              <Container>
                <div
                  className="page_body_content application-page"
                  dangerouslySetInnerHTML={{
                    __html: this.state.page_body_content,
                  }}
                />
                <SVGLoader loaderClass="applicationsLoader" />
                <Row className="applicationPlatform applicationLogos">
                  {this.state.supprting_apps_data.map(apps_data => (
                    <GenCol
                      xs="6"
                      sm="4"
                      md="3"
                      image={CMS_URL + apps_data.field_logo}
                    ></GenCol>
                  ))}
                </Row>
              </Container>
            </div>
            <DemoRequest />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
