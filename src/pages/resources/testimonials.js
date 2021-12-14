import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import { globalHistory } from '@reach/router'
import SEO from '../../components/seo'
import DemoRequest from '../../components/demoRequest'
import Banner from '../../components/banner'
import CustomerQuote from '../../components/customer-quotes'
import axios from 'axios'
import SVGLoader from '../../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/resources/testimonials')

class App extends Component {
  state = {
    testimonials_list: [],
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
    },
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/testimonials/get_all')
      .then(res => {
        const testimonials_list = res.data
        this.setState({ testimonials_list })
      })
      .catch(error => {
        console.log(error.response)
      })

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
          document.getElementsByClassName('TestimonialLoader')[0].remove()
        }
      })
      .catch(error => {
        // console.log(error.response)
      })
  }

  render() {
    return (
      <Layout>
        <SEO
          url={page_url}
          title={this.state.page_data.metatag.value.title}
          image={this.state.page_data.field_banner[0].url}
          description={this.state.page_data.metatag.value.description}
        />
        <main>
          <Banner
            fluid="true"
            image={this.state.page_data.field_banner[0].url}
          />
          <div className="demoCalloutHolder">
            <Container>
              <div className="demoCalloutSec">
                <div
                  className="page_body_content"
                  dangerouslySetInnerHTML={{
                    __html: this.state.page_body_content,
                  }}
                />
                <SVGLoader loaderClass="TestimonialLoader" />
                <Row>
                  {this.state.testimonials_list.map(testimonial => (
                    <CustomerQuote
                      xs={12}
                      md={12}
                      lg={4}
                      image={CMS_URL + testimonial.field_company_logo}
                      title={testimonial.title}
                      designation={testimonial.field_position_full}
                      content={testimonial.field_description}
                    ></CustomerQuote>
                  ))}
                </Row>
              </div>
            </Container>
          </div>
          <DemoRequest />
        </main>
      </Layout>
    )
  }
}

export default App
