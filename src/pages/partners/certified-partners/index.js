import React, { Component } from 'react'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import GetStarted from '../../../components/getStarted'
import Banner from '../../../components/banner'
import partner from '../../../assets/images/certifiedPatner/partner.png'
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import { Link } from 'gatsby'
import Shopify from '../../../assets/images/partners/shopify.png'
import Magento from '../../../assets/images/partners/magento.png'
import Office365 from '../../../assets/images/partners/office365.png'
import ShopifyPlus from '../../../assets/images/partners/shopifyPlus.png'
import SalesForce from '../../../assets/images/partners/salesForce.png'
import Mosiac from '../../../assets/images/partners/mosiac.png'
import IrishTitan from '../../../assets/images/partners/irish-titan.png'
import Visiture from '../../../assets/images/partners/visiture.png'
import Svtech from '../../../assets/images/partners/svtech.png'
import SheroCommerce from '../../../assets/images/partners/shero-commerce.png'
import EastmontDigital from '../../../assets/images/partners/eastmont-digital.png'
import Supertech from '../../../assets/images/partners/supertech.png'
import Variux from '../../../assets/images/partners/variux.png'
import TheRetailComputerGroup from '../../../assets/images/partners/the-retail-computer-group.jpg'
import Headimg from '../../../assets/images/partners/headimg.png'
import Snyder from '../../../assets/images/partners/snyder.png'
import Sdot from '../../../assets/images/partners/sdot.png'

const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/partners/partner-certified')

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
    partner_list: [],
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/partners/certified_partners')
      .then(res => {
        const partner_list = res.data
        this.setState({ partner_list })
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

            <div className="partnerSec secPad">
              <Container>
                <Row>
                  <Col md="12">
                    <div
                      className="text-center page_body_content"
                      dangerouslySetInnerHTML={{
                        __html: this.state.page_body_content,
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="partnerCert">
                    {/*
                      <Col md="12">
                        <h2 className="font-heading-26">I’m looking for a solution provider</h2>
                      </Col>
                      <div className="formBar">
                        <Form>
                          <Form.Row>
                          <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Control
                              type="text"
                              placeholder="Enter your city or address"
                              name="address"
                              className="icon-left address"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Control
                              type="text"
                              name="organizationSize"
                              placeholder="Your organization size"
                              className="icon-left org"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Control
                              type="search"
                              name="searchProducts"
                              placeholder="Search for products"
                              className="icon-right magnifier"
                            />
                          </Form.Group>
                          </Form.Row>
                        </Form>
                      </div> */}
                    <div className="partnerSec">
                      <div className="headingSBS">
                        <h3>
                          <span>
                            <Image src={Headimg}></Image>
                          </span>{' '}
                          Platinum Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                      </div>
                      <Row>
                        <Col md="12">
                          <div className="borderCol">
                            <Link
                              to="/partners/certified-partners/snyder-technologies"
                              className="MispAnchor"
                            >
                              <div className="imgWrap">
                                <Image src={Snyder} alt="img"></Image>
                              </div>
                              <h4>Snyder Technologies</h4>
                              <span className="redbg">Preferred</span>{' '}
                              <span className="redbg">Platinum Partners</span>
                              <p>
                                Snyder Technologies is a future-focused
                                technology enablement company with expertise in
                                advanced application and web development,
                                scalable managed services, and an emphasis on
                                customer support. We don’t just talk technical
                                mumbo jumbo and then ignore your input. We know
                                there’s a necessary relationship between the
                                client, the design, and the technology.  We
                                assemble highly experienced, cross-functional
                                teams from analytical, creative, and technical
                                backgrounds to reach our shared goals. Our
                                clients are integral to the team, engaging in
                                the process from the very start to completion.
                              </p>
                            </Link>
                          </div>
                        </Col>
                        {/*
                        <Col md="6">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Sdot} alt="img"></Image>
                              </Link>
                            </div>
                            <h4>Soft Intelligence</h4>
                            <span className="redbg">Platinum Partners</span>
                            <p>
                              We don’t just talk technical mumbo jumbo at you
                              and ignore your input. We know there’s a necessary
                              relationship between the client, the design, and
                              the technology. Mutual understanding is our
                              emphasis. We assemble highly experienced,
                              cross-functional teams from analytical, creative,
                              and technical backgrounds to reach our shared
                              goals. Our clients are integral to the team,
                              engaging in the process from the very start to
                              completion.
                            </p>
                          </div>
                        </Col> */}
                      </Row>
                    </div>
                    <div className="partnerSec">
                      <div className="headingSBS">
                        <h3>
                          <span>
                            <Image src={Headimg}></Image>
                          </span>{' '}
                          Gold Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                      </div>
                      <Row>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link> */}
                              <Image
                                src={TheRetailComputerGroup}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>The Retail Computer Group</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              The Retail Computer Group, LLC has been in
                              business for over 50 years now, with our emphasis
                              on servicing and supporting the Specialty Retail
                              Industry. We are currently ranked as an Elite
                              Dealer for NCR CounterPoint and are specialists
                              with iPaaS.com for Counterpoint users. Our clients
                              range in size from single-user, single location to
                              multi-user, several locations. installed in over
                              15,000 companies.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Svtech} alt="img"></Image>
                              </Link> */}
                              <Image src={EastmontDigital} alt="img"></Image>
                            </div>
                            <h4>Eastmont Digital</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              Our wide range of capabilities allows us to think
                              critically and produce the very best creative and
                              technical solutions – without limitations. The
                              appropriate combination of services may vary from
                              partner to partner, but our team’s ability to
                              scale and grow eCommerce businesses will always
                              remain the same.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Mosiac} alt="img"></Image>
                              </Link> */}
                              <Image src={Visiture} alt="img"></Image>
                            </div>
                            <h4>Visiture</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              Visiture is an award-winning, premier digital
                              agency for leading brands selling products online.
                              As technology transforms the eCommerce space, we
                              enable success for our clients through authentic
                              brand partnerships and vanguard leadership.
                              Together, we help brands consistently outpace the
                              competition.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="partnerSec">
                      <div className="headingSBS">
                        <h3>
                          <span>
                            <Image src={Headimg}></Image>
                          </span>{' '}
                          Silver Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                      </div>
                      <Row>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/*<Link to="/partners/partner-certified/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link> */}
                              <Image src={Variux} alt="img"></Image>
                            </div>
                            <h4>Variux</h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              We love solving problems – connecting systems,
                              finding efficiencies, and optimizing for growth is
                              at the core of everything we do.There is
                              exponential potential when an eCommerce platform
                              works as it should. We navigate and connect
                              complex systems for manufacturers and
                              distributors, ensuring that when customers hit the
                              “Buy” button, they get exactly what they
                              purchased.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Svtech} alt="img"></Image>
                              </Link> */}
                              <Image src={SheroCommerce} alt="img"></Image>
                            </div>
                            <h4>Shero Commerce </h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              Since our inception, we’ve remained at the
                              forefront of technology, working to stay a step
                              ahead of the rapid evolution of web services and
                              software. Our team is composed of efficient and
                              highly educated professionals from varied
                              backgrounds. We are continually finding new ways
                              to navigate the ever-changing world of eCommerce
                              and website management.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightmispBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/partner-certified/partner-detail">
                                <Image src={Mosiac} alt="img"></Image>
                              </Link> */}
                              <Image src={IrishTitan} alt="img"></Image>
                            </div>
                            <h4>Irish Titan</h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              The first thing we do is get know everything about
                              your business. We learn what you do, how you do
                              it, and (most importantly) why you do it. That's
                              B1O2. Then we get busy. Really busy. There are 5
                              traits every Titan must possess, in their own
                              authentic fashion, and those are POTIS: Passion,
                              Ownership, Team, Impact, Skills.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    {/*
                    <div className="partnerSec">
                      <div className="headingSBS">
                        <h3>
                          <span>
                            <Image src={Headimg}></Image>
                          </span>{' '}
                          Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                    {/*
                      </div>
                      <Row>
                        <Col>
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Image
                                src={SalesForce}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Image
                                src={ShopifyPlus}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Image
                                src={Office365}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Image
                                src={Magento}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Image
                                src={Shopify}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                          </div>
                        </Col>
                      </Row> */}
                    {/*
                        <Row>
                          <Col>
                            <div className="borderCol">
                              <div className="imgWrap">
                              <Link to="/partners/partner-detail">
                               <Image src={SalesForce} alt="img"></Image>
                               </Link>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="borderCol">
                              <div className="imgWrap">
                              <Link to="/partners/partner-detail">
                               <Image src={ShopifyPlus} alt="img"></Image>
                               </Link>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="borderCol">
                              <div className="imgWrap">
                              <Link to="/partners/partner-detail">
                               <Image src={Office365} alt="img"></Image>
                               </Link>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="borderCol">
                              <div className="imgWrap">
                              <Link to="/partners/partner-detail">
                               <Image src={Magento} alt="img"></Image>
                               </Link>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="borderCol">
                              <div className="imgWrap">
                              <Link to="/partners/partner-detail">
                               <Image src={Shopify} alt="img"></Image>
                               </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                    </div>*/}
                  </div>
                </Row>
              </Container>
            </div>
            <GetStarted />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
