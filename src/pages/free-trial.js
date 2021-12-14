import React, { Component } from 'react'
import { globalHistory } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Partners from '../components/partnerSection'
import GetStarted from '../components/getStarted'
import ServiceCallout from '../components/serviceCallout'
import Services from '../components/services'
import Testimonial from '../components/testimonials'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import IntegrationSec from '../components/integrationSec'
import Banner from '../components/banner'
import UnderConstruction from '../components/underConstruction'
import SideBySide from '../components/sideBySide'
import imageBanner from '../assets/images/company/banner.jpg'
import MapPlaceHolder from '../assets/images/map-placeholder.jpg'
import { validateForm } from '../assets/js/custom-validation'
import axios from 'axios'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const API_URL = process.env.GATSBY_API_URL

const urljoin = require('url-join')
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const page_url = urljoin(GATSBY_APP_URL, '/free-trial')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastName: '',
      phoneNumber: '',
      workemail: '',
      companyName: '',
      jobTitle: '',
      projectTimeframe: '',
      application: false,
      systems: '',
      page_data: {
        metatag: { value: { title: null, description: null, abstract: null } },
        field_banner: [{ url: null }],
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
      field_map_link: null,
      address_locations: [],
      platforms: [
        {
          name: 'bigCommerce',
          key: 'bigCommerce',
          label: 'BigCommerce',
          value: 'Big-Commerce',
          isChecked: false,
        },
        {
          name: 'shopify',
          key: 'shopify',
          label: 'Shopify',
          value: 'Shopify',
          isChecked: false,
        },
        {
          name: 'magento',
          key: 'magento',
          label: 'Magento',
          value: 'Magento',
          isChecked: false,
        },
        {
          name: 'sage',
          key: 'sage',
          label: 'Sage',
          value: 'Sage',
          isChecked: false,
        },
        {
          name: 'crm',
          key: 'crm',
          label: 'Microsoft Dynamics CRM',
          value: 'Microsoft Dynamics CRM',
          isChecked: false,
        },
        {
          name: 'clover',
          key: 'clover',
          label: 'Clover/Square',
          value: 'Clover/Square',
          isChecked: false,
        },
        {
          name: 'counterpoint',
          key: 'counterpoint',
          label: 'NCR Counterpoint',
          value: 'NCR Counterpoint',
          isChecked: false,
        },
        {
          name: 'salesforce',
          key: 'salesforce',
          label: 'Salesforce',
          value: 'Salesforce',
          isChecked: false,
        },
        {
          name: 'netsuite',
          key: 'netsuite',
          label: 'Netsuite',
          value: 'Netsuite',
          isChecked: false,
        },
        {
          name: 'accumatica',
          key: 'accumatica',
          label: 'Accumatica',
          value: 'Accumatica',
          isChecked: false,
        },
      ],
      mailSent: false,
      error: null,
      isValidated: false,
      isValidatedChkbox: false,
    }
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
      .get(CMS_API_URL + 'v1/locations/footer_location')
      .then(res => {
        const footer_location = res.data[0]
        if (
          typeof footer_location.field_map_link !== 'undefined' &&
          footer_location.field_map_link != null
        ) {
          const field_map_link =
            '<iframe src="' + footer_location.field_map_link + '"></iframe>'
          this.setState({ field_map_link })
        }
        document.getElementsByClassName('FreeTrialLocationLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })

    axios
      .get(CMS_API_URL + 'v1/locations/view_contact_locations')
      .then(res => {
        const address_locations = res.data
        this.setState({ address_locations })
      })
      .catch(error => {
        console.log(error.response)
      })

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

  handleFormSubmit(event) {
    event.preventDefault()

    //Reset State
    this.setState({ error: null, mailSent: false })

    const formEl = this.formEl

    //If form validate
    if (validateForm(formEl)) {
      let data = this.state
      const platformValues = data.platforms
        .filter(item => item.isChecked)
        .map(item => item.value)
        .join(',')
      data['systems'] = platformValues

      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: API_URL + '/ContactUs/SendEmail',
          headers: { 'content-type': 'application/json' },
          data: data,
        })
          .then(result => {
            console.log(result)
            if (result.data.message) {
              this.setState({
                lastName: '',
                phoneNumber: '',
                workemail: '',
                companyName: '',
                jobTitle: '',
                projectTimeframe: '',
                systems: '',
                application: '',
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

  handleCheckChieldElement = event => {
    let platforms = this.state.platforms
    platforms.forEach(platform => {
      if (platform.value === event.target.value)
        platform.isChecked = event.target.checked
    })
    this.setState({ platforms: platforms })
    this.validatePlatform()
  }

  validatePlatform() {
    let platforms = this.state.platforms
    const foundPlatform = platforms.find(platform => {
      return platform.isChecked
    })
    if (foundPlatform) {
      this.setState({
        isValidatedChkbox: true,
      })
    } else {
      this.setState({
        isValidatedChkbox: false,
      })
    }
  }

  enterApplication = e => {
    const applicationElement = document.getElementById('application')
    const checked = e.target.checked
    const { application } = e.target
    this.setState({
      application: !this.state.application,
    })
    if (checked) {
      applicationElement.removeAttribute('disabled')
    } else {
      applicationElement.setAttribute('disabled', 'disabled')
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
      <>
        <Layout>
          <SEO
            url={page_url}
            title={this.state.page_data.metatag.value.title}
            description={this.state.page_data.metatag.value.description}
          />
          <main>
            <div className="freeTrial">
              <Container>
                <Row>
                  <Col xs="12" sm="12" md="7" lg="7">
                    <div className="formHolder">
                      <div
                        className="page_body_content"
                        dangerouslySetInnerHTML={{
                          __html: this.state.page_body_content,
                        }}
                      />
                      <Form
                        method="post"
                        action="#"
                        ref={form => (this.formEl = form)}
                        className={classNames}
                        noValidate
                      >
                        {this.state.mailSent && (
                          <div className="alert-success alert text-center mb-5">
                            Thank you for contacting us.
                          </div>
                        )}
                        {this.state.error && (
                          <div className="alert-danger error alert text-center  mb-5">
                            {this.state.error}
                          </div>
                        )}
                        <Row>
                          <Col xs="12" sm="6">
                            <Form.Group controlId="firstName">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.firstName}
                                onChange={e =>
                                  this.setState({ firstName: e.target.value })
                                }
                              />
                              <Form.Label>First Name</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>

                          <Col xs="12" sm="6">
                            <Form.Group controlId="lastName">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.lastName}
                                onChange={e =>
                                  this.setState({ lastName: e.target.value })
                                }
                              />
                              <Form.Label>Last Name</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>

                          <Col xs="12" sm="6">
                            <Form.Group controlId="phoneNumber">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.phoneNumber}
                                onChange={e =>
                                  this.setState({ phoneNumber: e.target.value })
                                }
                              />
                              <Form.Label>Phone Number</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>

                          <Col xs="12" sm="6">
                            <Form.Group controlId="jobType">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.workemail}
                                onChange={e =>
                                  this.setState({ workemail: e.target.value })
                                }
                              />
                              <Form.Label>Work Email</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>
                          <Col xs="12" sm="6">
                            <Form.Group controlId="companyName">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.companyName}
                                onChange={e =>
                                  this.setState({ companyName: e.target.value })
                                }
                              />
                              <Form.Label>Company Name</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>
                          <Col xs="12" sm="6">
                            <Form.Group controlId="companyUrl">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.jobTitle}
                                onChange={e =>
                                  this.setState({ jobTitle: e.target.value })
                                }
                              />
                              <Form.Label>Company URL</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>

                          <Col xs="12" sm="6" className="d-none">
                            <Form.Group controlId="projectTimeframe">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.projectTimeframe}
                                onChange={e =>
                                  this.setState({
                                    projectTimeframe: e.target.value,
                                  })
                                }
                              />
                              <Form.Label>Project timeframe</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>

                          {/* <Col xs="12" sm="6">
                                                    <Form.Group controlId="emailSubject">
                                                        <Form.Control className="inputMod" type="text" required={true} value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} />
                                                        <Form.Label>Email Subject</Form.Label>
                                                        <div className="invalid-feedback" />
                                                    </Form.Group>
                                                </Col> */}
                        </Row>
                        <div className="integrateSys">
                          <Row>
                            <Col xs="12">
                              <h6>Systems to Integrate:</h6>
                            </Col>
                            {this.state.platforms.map((item, index) => {
                              return (
                                <Col xs="12" md="6" className="checkboxGroup">
                                  <Form.Group key={index}>
                                    <Form.Check
                                      label={item.label}
                                      required={!this.state.isValidatedChkbox}
                                      onChange={this.handleCheckChieldElement}
                                      className="customCheckbox"
                                      type="checkbox"
                                      id={item.name}
                                      value={item.value}
                                    />
                                  </Form.Group>
                                </Col>
                              )
                            })}
                            {/* <Col xs="12" md="6">
                                                        <Form.Group>
                                                            <Form.Check  label="BigCommerce" className="customCheckbox" type="checkbox" id="bigCommerce" required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Magentos" className="customCheckbox" type="checkbox" id="magneto"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Microsoft Dynamics CRM" className="customCheckbox" type="checkbox" id="crm"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="NCR Counterpoint" className="customCheckbox" type="checkbox" id="ncr"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Netsuite" className="customCheckbox" type="checkbox" id="netsuite"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs="12" md="6">
                                                        <Form.Group>
                                                            <Form.Check label="Shopify" className="customCheckbox" type="checkbox" id="shopify"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Sage" className="customCheckbox" type="checkbox" id="sage"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Clover/Square" className="customCheckbox" type="checkbox" id="cloverSquare"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Salesforce" className="customCheckbox" type="checkbox" id="salesforce"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check label="Accumatica" className="customCheckbox" type="checkbox" id="accumatica"  required={true} value={this.state.systems} onChange={e => this.setState({ systems: e.target.value })}/>
                                                        </Form.Group>
                                                    </Col> */}
                          </Row>
                        </div>
                        <Row>
                          <Col xs="1" sm="1">
                            <Form.Group controlId="haveApplication">
                              <Form.Check
                                label=""
                                className="customCheckbox"
                                type="checkbox"
                                id="haveApplication"
                                required={true}
                                value={this.state.application}
                                onChange={this.enterApplication}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs="11" sm="11" className="pl-0">
                            <Form.Group controlId="application">
                              <Form.Control
                                className="inputMod"
                                type="text"
                                required={true}
                                value={this.state.projectTimeframe}
                                onChange={e =>
                                  this.setState({
                                    projectTimeframe: e.target.value,
                                  })
                                }
                                disabled="disabled"
                              />
                              <Form.Label>Enter Application</Form.Label>
                              <div className="invalid-feedback" />
                            </Form.Group>
                          </Col>
                          {/* <Col>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label></Form.Label>
                                                        <Form.Control className="inputMod" as="select" required={true} value={this.state.projectTimeframe} onChange={e => this.setState({ projectTimeframe: e.target.value })}>
                                                            <option value="">Select</option>
                                                            <option value="Project Timeframe">Project Timeframe</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col> */}
                        </Row>
                        {/* <Row>
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Check label="I agree to iPaaS.com Privacy Policy" className="customCheckbox" type="checkbox" id="agrement" required={true} value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row> */}

                        <Button
                          variant="primary"
                          className=" btn-redBorder btn-block"
                          type="submit"
                          onClick={e => this.handleFormSubmit(e)}
                        >
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </Col>
                  <Col xs="12" sm="12" md="5" lg="5">
                    <div className="contactDetail">
                      <h5>Where to find us</h5>
                      <SVGLoader loaderClass="FreeTrialLocationLoader" />
                      <ul>
                        {this.state.address_locations.map(address_location => (
                          <li>
                            {/* <div className="w-50" dangerouslySetInnerHTML={{__html: address_location.title}}></div> */}
                            <div className="w-55">{address_location.title}</div>
                            <div className="w-45">
                              <a
                                href={'mailto:' + address_location.field_email}
                              >
                                {address_location.field_email}
                              </a>
                              <br />
                              <a
                                href={
                                  'tel:' + address_location.field_contact_number
                                }
                              >
                                {address_location.field_contact_number}
                              </a>
                              {/* <a href="tel:770.792.2212">770.792.2212</a> */}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mapHolder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: this.state.field_map_link,
                          }}
                        />

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.397575107655!2d-84.59371808478615!3d34.00800438061801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51569405ac673%3A0xfe80248d6a327277!2sRed%20Rook!5e0!3m2!1sen!2s!4v1571400320257!5m2!1sen!2s"></iframe> */}
                      </div>
                    </div>
                  </Col>
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
