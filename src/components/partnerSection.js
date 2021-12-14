import React, { Component } from 'react'
import axios from 'axios'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL

class Partners extends Component {
  state = {
    featured_partners: [],
  }
  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/apps/featured_application_for_frontpage')
      .then(res => {
        const featured_partners = res.data
        this.setState({ featured_partners })
        document.getElementsByClassName('FeaturedPartnerLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="partnerHolder">
        <Container>
          {/* <SVGLoader loaderClass="FeaturedPartnerLoader" /> */}
          <Row>
            <div className="partnerImgHolder row">
              {this.state.featured_partners.map(featured_partners => (
                <div className="col-3 col-lg-2" key={featured_partners.id}>
                  <Image
                    alt={featured_partners.title}
                    src={CMS_URL + featured_partners.field_logo}
                  />
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Partners
