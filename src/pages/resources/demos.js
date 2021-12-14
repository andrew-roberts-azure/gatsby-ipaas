import React, { Component } from 'react'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import { Row, Container } from 'react-bootstrap'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import DemoRequest from '../../components/demoRequest'
import Banner from '../../components/banner'
import Callout from '../../components/callout'
import SVGLoader from '../../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/resources/demos')
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
    },
    demos_list: [],
  }

  componentDidMount() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')

    axios
      .get(CMS_API_URL + 'v1/videos/for_demos_page')
      .then(res => {
        const demos_list = res.data
        this.setState({ demos_list })
        document.getElementsByClassName('DemosLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })

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
            <div className="demoCalloutHolder">
              <Container>
                <div
                  className="page_body_content"
                  dangerouslySetInnerHTML={{
                    __html: this.state.page_body_content,
                  }}
                />
                <div className="demoCalloutSec">
                  <SVGLoader loaderClass="DemosLoader" />
                  <Row>
                    {this.state.demos_list.map(demos_list => (
                      <Callout
                        title={demos_list.title}
                        link={demos_list.field_video_url}
                        OpenNewTab={
                          demos_list.field_open_new_tab == 'Yes' ? '_blank' : ''
                        }
                        content={demos_list.field_description}
                        image={CMS_URL + demos_list.field_image}
                      ></Callout>
                    ))}
                  </Row>
                </div>
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
