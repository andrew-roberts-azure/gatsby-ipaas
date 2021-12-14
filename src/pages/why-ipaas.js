import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/getStarted'
import Banner from '../components/banner'
import imageBanner from '../assets/images/whyBanner.jpg'
import sideThumb from '../assets/images/sideThumb.jpg'
import SideBySide from '../components/sideBySide'
import Content from '../components/content'
import { Container, Row, Col } from 'react-bootstrap'
import PersonaIndexList from '../components/PersonaIndexList'
import { globalHistory } from '@reach/router'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL

const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const url = urljoin(GATSBY_APP_URL, '/why-ipaas')

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
          document.getElementsByClassName('whyIpaasContentLoader')[0].remove()
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
            url={url}
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
              <div className="simpleContent mb-5 omnichannelContentHolder">
                <Container>
                  <SVGLoader loaderClass="whyIpaasContentLoader" />
                  <div
                    className="page_body_content why_ipaas_body_content"
                    dangerouslySetInnerHTML={{
                      __html: this.state.page_body_content,
                    }}
                  />

                  {/* <Row>
                    <Col md="5" sm="12" xs="12">
                      <h2>
                        How did this leadership team overcome their digital
                        transformation challenges?
                      </h2>
                    </Col>
                    <Col md="7" sm="12" xs="12">
                      <p>
                        Meet the team of BuyLow SellHigh Off Fifth (BSoF). A
                        twelve-year-old company that began as a regional
                        distributor of home items and accessories, today BSoF is
                        a national brand with its own private label line, a
                        growing online B2C business model, and several
                        destination sites chosen as potential brick-and-mortar
                        locations. Growth was steady for their first several
                        years, and their leadership team was in lock-step.
                        Today, however, diversification in their channel sales
                        and a need for omni-channel customer experience is
                        taking take its toll. The mounting cost of technology
                        and maintenance of an ever-confounding web of
                        integrations and systems that don’t communicate well
                        together has created a series of cross-departmental
                        breakdowns that the team can’t solve on their own. Read
                        more to learn how Pat (CFO), Brook (Operations), Kim
                        (CMO), and Ajay (CIO) solved their technology challenges
                        and returned to their own areas of expertise to get BSoF
                        back on pace for success.
                      </p>
                    </Col>
                  </Row> */}
                </Container>
              </div>
              <div className="container">
                <div className="row">
                  <div className="obstacleHolder obstacleTeam">
                    <PersonaIndexList />
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
