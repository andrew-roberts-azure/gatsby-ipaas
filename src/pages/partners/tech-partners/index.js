import React, { Component } from 'react'
import axios from 'axios'
import { globalHistory } from '@reach/router'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import GetStarted from '../../../components/getStarted'
import Banner from '../../../components/banner'
import TechPartner from '../../../assets/images/certifiedPatner/MISP_Header.png'
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import { Link } from 'gatsby'
import Shopify from '../../../assets/images/partners/shopify.png'
import Magento from '../../../assets/images/partners/magento.png'
import Office365 from '../../../assets/images/partners/office365.png'
import ShopifyPlus from '../../../assets/images/partners/shopifyPlus.png'
import SalesForce from '../../../assets/images/partners/salesForce.png'
import Mosiac from '../../../assets/images/partners/mosiac.png'
import DotDigital from '../../../assets/images/partners/dotdigital.png'
import Avalara from '../../../assets/images/partners/avalara.png'
import Svtech from '../../../assets/images/partners/svtech.png'
import Klevu from '../../../assets/images/partners/klevu.png'
import NCR from '../../../assets/images/partners/ncr.png'
import Supertech from '../../../assets/images/partners/supertech.png'
import Blackbaud from '../../../assets/images/partners/blackbaud.jpg'
import BigCommerce from '../../../assets/images/partners/bigcommerce.png'
import Headimg from '../../../assets/images/partners/headimg.png'
import Snyder from '../../../assets/images/partners/snyder.png'
import Sdot from '../../../assets/images/partners/sdot.png'

const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/partners/tech-partners')

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
                    {/*
                    <div className="partnerSec">
                      <div className="headingSBS">
                        <h3>
                          <span>
                            <Image src={Headimg}></Image>
                          </span>{' '}
                          Platinum Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                    {/*
                      </div>
                      <Row>
                        <Col md="6">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/tech-partners/snyder-technologies">
                                <Image src={Snyder} alt="img"></Image>
                              </Link>
                            </div>
                            <h4>Snyder Technologies</h4>
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
                        </Col>
                        <Col md="6">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/tech-partners/partner-detail">
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
                        </Col>
                      </Row>
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
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightTechPartnerBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link> */}
                              <Image
                                src={BigCommerce}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>BigCommerce</h4>
                            <span className="redbg">Preferred</span>{' '}
                            <span className="redbg">Platinum Partners</span>
                            <p>
                              Regardless of your current state, create a robust,
                              differentiated offering without compromising
                              security, stability, or scalability. Through
                              open-platform flexibility and extensibility,
                              supported by extensive specialized services,
                              BigCommerce empowers you to rise above complexity
                              — and ultimately focus on optimizing your business
                              for growth.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightTechPartnerBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Svtech} alt="img"></Image>
                              </Link> */}
                              <Image src={NCR} alt="img"></Image>
                            </div>
                            <h4>NCR</h4>
                            <span className="redbg">Platinum Partners</span>
                            <p>
                              Shaping the future for 135 years, NCR is the
                              world’s enterprise technology leader for
                              restaurants, retailers and banks. The #1 global
                              POS software provider for retail and hospitality,
                              and the #1 provider of multi-vendor ATM software,
                              we create software, hardware and services that run
                              the enterprise from back office to the front end
                              and everything in between for our clients.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Mosiac} alt="img"></Image>
                              </Link> */}
                              <Image src={Avalara} alt="img"></Image>
                            </div>
                            <h4>Avalara</h4>
                            <span className="redbg">Platinum Partners</span>
                            <p>
                              We’ve been disrupting the status quo in the
                              “scintillating” world of sales tax management
                              since 2004, and we continue to blaze new roads in
                              this very old industry. From the beginning, our
                              dedicated team of revolutionaries has worked day
                              and night to help businesses of all sizes achieve
                              compliance by providing a fast, easy, and accurate
                              way to manage transactional taxes, from
                              calculating rates to preparing and filing returns.
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
                          Gold Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                      </div>
                      <Row>
                        {/*
                        <Col md="6" lg="4">
                          <div className="borderCol">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link> */}
                        {/*
                              <Image
                                src={MagentoMain}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>Magento</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              Magento Commerce offers a one-of-a-kind eCommerce
                              solution with enterprise power, unlimited
                              scalability, and open-source flexibility for B2C
                              and B2B experiences. Magento allows you to create
                              unique, full-lifecycle customer experiences proven
                              to generate more sales. No matter what your
                              company’s size or goals — omnichannel, global
                              expansion, mobile — Magento delivers everything
                              you need for growth in an increasingly competitive
                              market.
                            </p>
                          </div>
                        </Col> */}
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightTechGoldPartnerBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link> */}
                              <Image
                                src={Blackbaud}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>Blackbaud</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              At Blackbaud, our solutions start with unmatched
                              data insights and a deep understanding of your
                              complex landscape. We use this unparalleled
                              expertise to create purpose-built solutions
                              spanning four consistent needs at the core of
                              every organization’s ability to thrive: securing
                              resources, delivering programs, managing
                              operations and measuring impact. Our Science of
                              Social Good solutions take you further, faster.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightTechGoldPartnerBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Svtech} alt="img"></Image>
                              </Link> */}
                              <Image
                                src={Klevu}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>Klevu</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              Klevu continuously learns how shoppers interact
                              with search on the store. It builds on the
                              learning and optimises results. No manual work.
                              Klevu adds contextually relevant synonyms to your
                              catalog in meta data format. This enrichment of
                              your catalog data can result in 3x the depth and
                              coverage of search results.
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol minHeightTechGoldPartnerBox">
                            <div className="imgWrap">
                              {/* <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Mosiac} alt="img"></Image>
                            </Link> */}
                              <Image
                                src={DotDigital}
                                alt="img"
                                className="partnerImg"
                              ></Image>
                            </div>
                            <h4>DotDigital</h4>
                            <span className="redTxt">Gold Partners</span>
                            <p>
                              Target your audience with omnichannel campaigns
                              that captivate, and delight customers so they keep
                              coming back. dotdigital’s platform features make
                              delivering personalized, omnichannel marketing
                              campaigns easy. Whether you’re looking for
                              data-driven email marketing or full-blown
                              omnichannel campaign orchestration, we’ve got it
                              in the bag.
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
                          Silver Partners
                        </h3>
                        {/* <a href="">View all</a> */}
                    {/*
                      </div>
                      <Row>
                        <Col md="6" lg="4">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Supertech} alt="img"></Image>
                              </Link>
                            </div>
                            <h4>Supertech</h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Svtech} alt="img"></Image>
                              </Link>
                            </div>
                            <h4>SV Tech</h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi
                            </p>
                          </div>
                        </Col>
                        <Col md="6" lg="4">
                          <div className="borderCol">
                            <div className="imgWrap">
                              <Link to="/partners/tech-partners/partner-detail">
                                <Image src={Mosiac} alt="img"></Image>
                              </Link>
                            </div>
                            <h4>Snyder Technologies</h4>
                            <span className="redTxt">Silver Partners</span>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div> */}
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
                              \
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
