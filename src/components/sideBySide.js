import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class SideBySide extends Component {
  render() {
    const { title, image, content, fluid, styles, subContent } = this.props
    return (
      <div className="SideBySide" style={styles}>
        <Container fluid={fluid}>
          <div className="sideBysideContent">
            <Row>
              <Col xs={12} md={7}>
                <div className="contentSection">
                  {title && <h3>{title}</h3>}
                  {content && <p>{content}</p>}
                  {subContent && <p>{subContent}</p>}
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="imageSection">
                  <Image src={image}></Image>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default SideBySide
