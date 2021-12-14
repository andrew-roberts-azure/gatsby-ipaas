import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import axios from 'axios'
import Promise from 'promise'
// import { validateForm } from '../assets/js/custom-validation'
// import * as Test from './thirdParty'
// const API_URL = process.env.GATSBY_API_URL
const CMS_API_URL = process.env.CMS_API_URL

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)
const validateForm = errors => {
  let valid = true
  Object.values(errors).forEach(val => val.length > 0 && (valid = false))
  return valid
}
class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mailSent: false,
      error: null,
      isValidated: false,

      cd_FIRSTNAME: '',
      email: '',
      ci_userConsentCheckBox: '',
      errors: {
        cd_FIRSTNAME: '',
        email: '',
      },
      footer_address: '',
      footer_year: new Date().getFullYear(),
    }
  }

  componentDidMount() {
    if (this.state.footer_address == '') {
      axios
        .get(CMS_API_URL + 'v1/locations/footer_location')
        .then(res => {
          const footer_location = res.data[0]
          if (
            typeof footer_location.field_address !== 'undefined' &&
            footer_location.field_address != null
          ) {
            const footer_address = footer_location.field_address
            this.setState({ footer_address })
          }
        })
        .catch(error => {
          console.log(error.response)
        })

      // console.log('componentDidMount from footer.js');
    }
  }

  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    let errors = this.state.errors

    switch (name) {
      case 'cd_FIRSTNAME':
        errors.cd_FIRSTNAME =
          value.length < 5 ? 'firstName must be 5 characters!' : ''
        break
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!'
        break
      default:
        break
    }

    this.setState({ errors, [name]: value })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  unsubscribe = () => {
    var f = document.getElementById('signup')
    console.log('clicked...... unsub')
    return false
    if (validate_signup(f, false)) {
      var v = document.getElementById('unsubscribe_clicked')
      v.value = 'true'
      f.submit()
    } else {
      var b = document.getElementById('btnsubmit')
      b.click()
    }
  }

  render() {
    const { errors } = this.state
    return (
      <footer>
        <Container>
          <div className="subContainer">
            <div className="footerSec">
              <div className="linkSecHolder">
                <div className="linkBlock">
                  <p>
                    <Link to="/why-ipaas">Why iPaaS</Link>
                  </p>
                  <p>
                    <Link to="/platform/overview">Platform</Link>
                  </p>
                  <p>
                    <Link to="/solution-retail">Solutions</Link>
                  </p>
                  <p>
                    <Link to="/applications">Applications</Link>
                  </p>
                  <p>
                    <Link to="/partners/overview">Partners</Link>
                  </p>
                </div>
                <div className="linkBlock">
                  <p>
                    <Link to="/free-trial">Request Trial</Link>
                  </p>
                  <p>
                    <Link to="/resources/demos">Resources</Link>
                  </p>
                  <p>
                    <Link to="/company">Company</Link>
                  </p>
                  <p>
                    <a href="https://developer.ipaas.com" target="_blank">
                      Developer Tools
                    </a>
                  </p>
                  <p>
                    <Link to="/free-trial">Contact</Link>
                  </p>
                </div>
                <div className="linkBlock">
                  <p>
                    <a href="http://portal.ipaas.com/#/Login" target="_blank">
                      Login
                    </a>
                  </p>
                  <p>
                    <a href="http://portal.ipaas.com/#/Login" target="_blank">
                      Customers
                    </a>
                  </p>
                  {/*
                  <p>
                    <Link to="/customer">Customers</Link>
                  </p>
                  */}
                  <p>
                    <Link to="/press">Press</Link>
                  </p>
                  <p>
                    <Link to="/blog">Blog</Link>
                  </p>
                </div>
                <div className="newsletterBlock abc">
                  <form
                    name="signup"
                    id="signup"
                    action="https://r2.dmtrk.net/signup.ashx"
                    method="post"
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    noValidate
                  >
                    <input type="hidden" name="ci_isconsentform" value="true" />
                    <input type="hidden" name="userid" value="266526" />
                    <input
                      type="hidden"
                      name="SIG6bfe9f70ad845fda003d368ed7d69eeefe54e47668644ff484440802bf82d818"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="addressbookid"
                      value="26970868"
                    />
                    <input
                      type="hidden"
                      name="ReturnURL"
                      value="https://ipaas.com"
                    />
                    <input
                      type="hidden"
                      name="ci_userConsentText"
                      value="Subscribe to our newsletter to stay up to date with company news! You may also also unsubscribe at any time."
                    />
                    <input
                      type="hidden"
                      id="ci_consenturl"
                      name="ci_consenturl"
                      value=""
                    />
                    <Form.Group controlId="email">
                      <Form.Label>Newsletter Subscription</Form.Label>
                      <div className="form-flex">
                        <div>
                          <div className="rowFormFlex">
                            <div className="pl-1 pr-1">
                              {/* <label className="wrap" htmlFor="email">Email</label> */}
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                aria-required="true"
                                placeholder="Email"
                                onChange={this.handleChange}
                                noValidate
                              />
                              {errors.email.length > 0 && (
                                <span className="error">{errors.email}</span>
                              )}
                            </div>

                            <div className="pl-1 pr-1">
                              {/* <label className="wrap" htmlFor="FIRSTNAME">FIRSTNAME</label> */}
                              <input
                                type="text"
                                className="form-control"
                                name="cd_FIRSTNAME"
                                id="FIRSTNAME"
                                aria-required="false"
                                placeholder="First Name"
                                onChange={this.handleChange}
                                noValidate
                              />
                              {errors.cd_FIRSTNAME.length > 0 && (
                                <span className="error">
                                  {errors.cd_FIRSTNAME}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>

                    <div className="subscriptionCheckbox">
                      <input
                        type="checkbox"
                        name="ci_userConsentCheckBox"
                        id="ci_userConsentCheckBox"
                        onChange={this.handleChange}
                        noValidate
                      />
                      <label htmlFor="ci_userConsentCheckBox">
                        Subscribe to our newsletter to stay up to date with
                        company news! You may also also unsubscribe at any time.
                      </label>
                    </div>

                    <div className="form-flex align-items-center">
                      <input
                        className="btn btn-light ml-0"
                        type="submit"
                        id="btnsubmit"
                        name="btnsubmit"
                        value="Subscribe"
                      />
                      <span className="pl-2 pr-2">Or</span>
                      <a
                        className="btn btn-danger  ml-0"
                        href="#"
                        onClick={this.unsubscribe}
                      >
                        Unsubscribe
                      </a>
                      <input
                        type="hidden"
                        name="unsubscribe_clicked"
                        id="unsubscribe_clicked"
                        value="false"
                      />
                      <input
                        type="hidden"
                        name="unsubRedirectUrl"
                        value="https://ipaas.com"
                      />
                    </div>
                  </form>

                  <p>Location</p>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.footer_address,
                    }}
                  />

                  {/* <p>1955 Vaughn Road, Suite 108</p>
                  <p>Kennesaw, Ga 30144</p> */}
                </div>
              </div>

              <div className="copyRightHolder">
                <ul className="linkList">
                  <li>&copy; {this.state.footer_year} iPaaS</li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                  </li>
                  {/*
                  <li>
                    <Link to="/security">Security</Link>
                  </li> */}
                </ul>
                <ul className="socialList ml-auto">
                  <li>
                    <a
                      href="https://www.facebook.com/TheRedRook/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/red-rook"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/RedRookInc" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
