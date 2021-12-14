import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DemoRequest from '../components/demoRequest'
import Banner from '../components/banner'
import SVGLoader from '../components/loader'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import { Container, Row, Button, Col, Image } from 'react-bootstrap'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/privacy')
class App extends Component {
  state = {
    page_data: {
      metatag: { value: { title: null, description: null, abstract: null } },
      field_banner: [{ url: null }],
      title: [{ value: null }],
      field_banner_title: [{ value: null }],
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
        document.getElementsByClassName('PrivacyPolicyLoader')[0].remove()
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

            <div className="simpleContent secPad">
              <Container>
                <div className="content">
                  <SVGLoader loaderClass="PrivacyPolicyLoader" />
                  <div
                    className="page_body_content"
                    dangerouslySetInnerHTML={{
                      __html: this.state.page_body_content,
                    }}
                  />
                </div>
              </Container>
            </div>
            {/*
              <div className="customerSec secPad litBg">
                <Container>
                    <div
                      className="page_body_content field_two_columns_title_descript_content overview_page_field_two_columns_title_descript_content "
                      dangerouslySetInnerHTML={{
                        __html: this.state.field_two_columns_title_descript_content,
                      }}
                    />
                </Container>
              </div>

              <div className="customerSec secPad spiceSec">
                <Container>
                  <div
                      className="page_body_content overview_page_field_two_columns_title_descript_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state.field_two_columns_description_content,
                      }}
                    />

                </Container>
              </div>
              */}
          </main>
          <DemoRequest />
        </Layout>
      </>
    )
  }
}

export default App
