import React, { Component } from 'react'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Banner from '../../../components/banner'
import GetStarted from '../../../components/getStarted'
import { Container, Row, Form, Col, Button, Image } from 'react-bootstrap'
import Browser from '../../../assets/images/partners/browser.svg'
import Diagram from '../../../assets/images/partners/diagram.svg'
import Girlwithmic from '../../../assets/images/partners/girlwithmic.svg'
import Group from '../../../assets/images/partners/group.svg'
import Hourse from '../../../assets/images/partners/hourse.svg'
import Partnertech from '../../../assets/images/partners/partnertech.svg'
import ServeMan from '../../../assets/images/partners/serveMan.svg'
import Snyderwhite from '../../../assets/images/partners/snyderwhite.png'

import { validateForm } from '../../../assets/js/custom-validation'
import Promise from 'promise'

const API_URL = process.env.GATSBY_API_URL
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL

const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(
  GATSBY_APP_URL,
  '/partners/tech-partners/snyder-technologies'
)

class App extends Component {
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
        }
      })
      .catch(error => {
        // console.log(error.response)
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailaddress: '',
      companyName: '',
      websiteURL: '',
      areaOfInterest: '',
      primaryFocus: '',
      partnerObjectives: '',
      message: '',
      mailSent: false,
      error: null,
      isValidated: false,
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
  }

  handleFormSubmit(event) {
    event.preventDefault()

    //Reset State
    this.setState({ error: null, mailSent: false })

    const formEl = this.formEl

    //If form validate
    if (validateForm(formEl)) {
      let data = this.state

      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: API_URL + '/contactus/BecomePartner',
          headers: { 'content-type': 'application/json' },
          data: data,
        })
          .then(result => {
            console.log(result)
            if (result.data.message) {
              this.setState({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                emailaddress: '',
                companyName: '',
                websiteURL: '',
                areaOfInterest: '',
                primaryFocus: '',
                partnerObjectives: '',
                message: '',
                mailSent: true,
                isValidated: false,
              })
            } else {
              this.setState({ error: result.data.error })
            }
          })
          .catch(error => this.setState({ error: error.message }))
      })
    } else {
      this.setState({ isValidated: true })
      return false
    }
  }
  render() {
    if (typeof window !== 'undefined') {
      const setActive = (el, active) => {
        const formField = el.parentNode.parentNode
        if (active) {
          formField.classList.add('form-field--is-active')
        } else {
          formField.classList.remove('form-field--is-active')
          el.value === ''
            ? formField.classList.remove('form-field--is-filled')
            : formField.classList.add('form-field--is-filled')
        }
      }

      ;[].forEach.call(document.querySelectorAll('.inputMod'), el => {
        el.onblur = () => {
          setActive(el, false)
        }
        el.onfocus = () => {
          setActive(el, true)
        }
      })
    }
    let classNames = []
    if (this.state.isValidated) {
      classNames.push('was-validated')
    }
    return (
      <Layout>
        <SEO
          url={page_url}
          title="Partners | Tech Partners | Snyder Technologies | iPaaS - Integration Platform for Connecting Small and Enterprise Applications"
          //title={this.state.page_data.metatag.value.title}
          //image={this.state.page_data.field_banner[0].url}
          //description={this.state.page_data.metatag.value.description}
          image=""
          description="Cutting edge technology in the hands of experts. Specialized in development and operations of growing companies."
        />
        <main>
          <div className="bannerPartner">
            <Container>
              <div className="bannerContent">
                <div className="bannerCaptionSec">
                  <Image src={Snyderwhite} alt="snyder technologies"></Image>
                  <h5>
                    Cutting edge technology in the hands of experts. Specialized
                    in development and operations of growing companies.{' '}
                  </h5>
                </div>
              </div>
            </Container>
          </div>

          <div className="partnerSec secPad">
            <Container>
              <Row>
                <Col md="12">
                  <div className="text-center page_body_content">
                    <h2>About Snyder Tech</h2>
                    <p>
                      Snyder Technologies is a future-focused technology
                      enablement company with expertise in advanced application
                      and web development, scalable managed services, and an
                      emphasis on customer support. We don???t just talk technical
                      mumbo jumbo and then ignore your input. We know there???s a
                      necessary relationship between the client, the design, and
                      the technology. ???We assemble highly experienced,
                      cross-functional teams from analytical, creative, and
                      technical backgrounds to reach our shared goals. Our
                      clients are integral to the team, engaging in the process
                      from the very start to completion.{' '}
                    </p>
                  </div>
                </Col>
              </Row>

              <div className="partnerDetail">
                <Row>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={Girlwithmic} alt="img"></Image>
                      </div>
                      <h5>We???re Always Available </h5>
                      <p>
                        Headquartered in Bethlehem, Pennsylvania, with offices
                        in India and Pakistan, we function in 24/7 operations in
                        every service line. We hire top tier talent around the
                        world and pride ourselves in cross-culture team
                        building.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={Hourse} alt="img"></Image>
                      </div>
                      <h5>Experts in iPaaS </h5>
                      <p>
                        Very few people know iPaaS as well as we do??? because we
                        helped build it! Snyder Tech was selected by the iPaaS
                        team to help develop the iPaaS platform. We worked
                        directly with the infamous Joe Duke and turned his
                        vision into code.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={Partnertech} alt="img"></Image>
                      </div>
                      <h5>Ideal Technology Partner for???. </h5>
                      <p>
                        Our customers range in size, some start-ups and some
                        enterprise corporations, some small businesses. They all
                        have one thing in common: a desire for cost effective
                        technology solutions that work to grow their businesses.{' '}
                      </p>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={ServeMan} alt="img"></Image>
                      </div>
                      <h5>IT & Managed Services </h5>
                      <ul>
                        <li>Office 365 Cloud Service Provider </li>
                        <li>Network Design and Architecture </li>
                        <li>Cloud Infrastructure </li>
                        <li>Office IT & Managed Services </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={Browser} alt="img"></Image>
                      </div>
                      <h5>Product Development </h5>
                      <ul>
                        <li>UI/UX Design </li>
                        <li>Scalable web based applications </li>
                        <li>NRWHL, NGINX, NestJS, etc. </li>
                        <li>DevOps practices and controls </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="4" md="6">
                    <div className="colIcon">
                      <div className="iconWrap">
                        <Image src={Group} alt="img"></Image>
                      </div>
                      <h5>Consulting and Staffing </h5>
                      <ul>
                        <li>Business process design </li>
                        <li>Digital Transformation </li>
                        <li>Offshore recruiting and staffing </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="sideByside">
                  <h4>Snyder Technologies Core Competencies</h4>
                  <Row>
                    <Col lg="5" md="6">
                      <div className="imgWrapSBD">
                        <Image src={Diagram} alt="img"></Image>
                      </div>
                    </Col>
                    <Col lg="7" md="6">
                      <div className="contentSBS">
                        <p>
                          With our extensive iPaaS experience, our hand-picked
                          staff, and our partnerships with some of the best
                          technology in the industry, we are confident our
                          company can deliver a solution for yours.{' '}
                        </p>
                        <p>
                          We???re the company that will go the extra mile for you.
                          Literally. We are eager to jump on a plane to meet
                          with clients and employees across the world. No matter
                          what the project is, we bust our behinds to get the
                          job done. Think of us as your personal passport to a
                          ???world of difference??? in technology solutions.{' '}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
          <div className="patner-overview">
            <GetStarted />
          </div>
        </main>
      </Layout>
    )
  }
}

export default App
