import React, { Component } from 'react'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GetStarted from '../../components/getStarted'
import Banner from '../../components/banner'
import imageBanner from '../../assets/images/pricingBanner.jpg'
import { Link } from 'gatsby'
import dollar from '../../assets/images/dollar.svg'
import SVGLoader from '../../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL

const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, 'platform/pricing')

import { Container, Row, Col, Image, Card, Table } from 'react-bootstrap'
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
          document.getElementsByClassName('PricingLoader')[0].remove()
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
            <div className="whiIpaas">
              <div className="simpleContent mb-5">
                <Container>
                  <div className="content text-center">
                    <SVGLoader loaderClass="PricingLoader" />
                    <div
                      className="page_body_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state.page_body_content,
                      }}
                    />

                    {/* <h2>Simple, predictable, reasonable.</h2>
                    <p>
                      Forget setup and training fees, annoying hidden charges,
                      and complex pricing. We believe in simple, flexible
                      pricing that works for everyone. All plans include a free
                      30-day trial. Cancel Anytime..
                    </p> */}
                  </div>
                </Container>
                <div className="pricingCard">
                  <Container>
                    {/* <Row> */}
                    <div
                      className="row"
                      dangerouslySetInnerHTML={{
                        __html: this.state
                          .field_two_columns_title_descript_content,
                      }}
                    />

                    {/* </Row> */}
                  </Container>
                </div>
                <div className="pricing-table">
                  <div className="container">
                    <div className="priceTable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state
                            .field_two_columns_description_content,
                        }}
                      />
                    </div>
                  </div>
                </div>
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
