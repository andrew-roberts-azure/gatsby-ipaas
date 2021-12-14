import React, { Component } from 'react'
import { Container, Row, div, Image, Button, Col } from 'react-bootstrap'
import leadership1 from '../assets/images/leadership/leader-1.jpg'
import leadership2 from '../assets/images/leadership/leader-2.jpg'
import leadership3 from '../assets/images/leadership/leader-3.jpg'
import leadership4 from '../assets/images/leadership/leader-4.jpg'
import { Link } from 'gatsby'

class Obstacles extends Component {
  render() {
    return (
      <div className="leadershipHolder">
        <Container>
          <div className="leadershipSec">
            <Row className="align-items-center">
              <Col xs="12" sm="12" md="6" lg="6">
                <div className="leadershipContent">
                  <small>DIGITAL TRANSFORMATION</small>
                  <h4>
                    How did this leadership team overcome their retail digital
                    transformation challenges?
                  </h4>
                  <p>
                    Today, every retailer is a technology company first, and a
                    product company second. Everyone on your team isn’t a
                    technology expert, and they shouldn’t have to be, but with
                    the ever expanding expectations of customers, the pressure
                    to digitally transform can affect every department.{' '}
                  </p>
                  <Link
                    className="btn-flat btn btn-danger btn-sm"
                    to="/why-ipaas"
                  >
                    Read More
                  </Link>
                  <hr />
                </div>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6">
                <div className="leadershipAvatarHolder">
                  <ul>
                    <li>
                      <Image src={leadership1}></Image>
                    </li>
                    <li>
                      <Image src={leadership2}></Image>
                    </li>
                    <li>
                      <Image src={leadership3}></Image>
                    </li>
                    <li>
                      <Image src={leadership4}></Image>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default Obstacles
