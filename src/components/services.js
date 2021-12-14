import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'
import Illustration from '../assets/images/digital-illustration-1.svg'
import TechPartner from '../assets/images/digital-illustration-2.svg'
import PartnerWithUs from '../assets/images/digital-illustration-3.svg'
import { Link } from 'gatsby'

class Services extends Component {
  render() {
    return (
      <div className="serviceDigitalHolder">
        <Container>
          <div className="serviceDigitalSec">
            <h4 className="text-center">A Digital Transformation Movement</h4>
            <div className="serviceDigitalBlockHolder">
              <div className="serviceDigitalRow">
                <div className="serviceDigitalContent col-md-6">
                  <h4>A next-generation cloud-based Integration Platform </h4>
                  <p>
                    Have you heard of API First, Powered By, Open API 3 or
                    Swagger, Digital Transformation, IoT? We have too. Learn how
                    we are innovating with these initiatives.
                  </p>
                  <Link to="/platform/platform-features">
                    See all platform features
                  </Link>
                </div>
                <div className="serviceDigitalAvatar col-md-5 ml-auto text-md-right text-center">
                  <Image src={Illustration} />
                </div>
              </div>
              <div className="serviceDigitalRow">
                <div className="serviceDigitalContent col-md-6">
                  <h4>Partner and Technology Ecosystem</h4>
                  <p>
                    iPaaS.com is not just an integration platform, it attracts
                    the nations best integration talent including MISP’s, CIO’s,
                    Application Developers, and Third-Pary Service Providers
                  </p>
                  <Link to="/partner/partner-certified">
                    Learn more about the solution
                  </Link>
                </div>
                <div className="serviceDigitalAvatar col-md-5 text-center">
                  <Image src={TechPartner} />
                </div>
              </div>
              <div className="serviceDigitalRow">
                <div className="serviceDigitalContent col-md-6">
                  <h4>Partner with us</h4>
                  <p>
                    If your organization is frequently acting as your customers’
                    CIO, you provide digital transformation services, or are
                    interested in learning about the opportunity to service
                    customers of iPaaS.com
                  </p>
                  <Link to="/partner/partner-overview">Become an MISP</Link>
                </div>
                <div className="serviceDigitalAvatar col-md-5 ml-auto text-md-right text-center">
                  <Image src={PartnerWithUs} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Services
