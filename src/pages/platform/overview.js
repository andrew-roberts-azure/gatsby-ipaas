import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GetStarted from '../../components/getStarted'
import Banner from '../../components/banner'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import SVGLoader from '../../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const urljoin = require('url-join')
const page_url = urljoin(GATSBY_APP_URL, '/platform/overview')

class App extends Component {
  state = {
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
      field_two_columns_description_content: null,
      field_two_columns_title_descript_content: null,
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
          document.getElementsByClassName('PlatformoverviewLoader')[0].remove()
        }

        if (
          typeof page_data !== 'undefined' &&
          typeof page_data.field_two_columns_title_descript[0] !== 'undefined'
        ) {
          const field_two_columns_title_descript_content = page_data.field_two_columns_title_descript[0].processed.replace(
            /src="\//g,
            `src="${CMS_URL}/`
          )
          this.setState({ field_two_columns_title_descript_content })
        }

        if (
          typeof page_data !== 'undefined' &&
          typeof page_data.field_two_columns_description[0] !== 'undefined'
        ) {
          const field_two_columns_description_content = page_data.field_two_columns_description[0].processed.replace(
            /src="\//g,
            `src="${CMS_URL}/`
          )
          this.setState({ field_two_columns_description_content })
        }
      })
      .catch(error => {
        // console.log(error.response)
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
            <div className="iplatform_overview">
              <div className="simpleContent ta_center secPad">
                <Container>
                  <div className="content ">
                    <SVGLoader loaderClass="PlatformoverviewLoader" />
                    <div
                      className="page_body_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state.page_body_content,
                      }}
                    />
                  </div>
                </Container>
              </div>
              <div className="customerSec secPad litBg unifiedHolder overviewCalloutSec">
                <Container>
                  <Row>
                    <div
                      className="page_body_content overview_page_field_two_columns_title_descript_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state
                          .field_two_columns_title_descript_content,
                      }}
                    />
                  </Row>
                </Container>
              </div>

              <div className="simpleContent">
                <Container>
                  <Row>
                    <div
                      className="page_body_content overview_page_field_two_columns_description_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state
                          .field_two_columns_description_content,
                      }}
                    />

                    {/* <Col md="7" sm="12">
                      <h2 className="text-left">Awesome Video</h2>
                      <p>
                        Our marketing department is working hard on an amazing
                        video to cover the functions and features of iPaaS.com,
                        and how you can use the platform to change how you use
                        technology to power your business. In the meantime, here
                        is one of our favorite videos on the internet. You’re
                        welcome.
                      </p>
                    </Col>
                    <Col md="5" sm="12">
                      <iframe
                        className="w-75 mt-3"
                        height="270"
                        src="https://www.youtube.com/embed/7ZWaWrvJ7nA"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col> */}
                  </Row>
                </Container>
              </div>
            </div>
            <GetStarted />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
