import React, { Component } from 'react'
import { Container, Row, Col, Card, CardDeck, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class Integration extends Component {
  render() {
    const { image, content, fluid, styles, subContent, link } = this.props
    return (
      <Col xs={6} ms={4} md={3}>
        <div className="integrate">
          <div className="imgWrap">
            <Image src={image}></Image>
          </div>
          <div className="descArea">
            <p>{content}</p>
          </div>
        </div>
      </Col>
    )
  }
}

export default Integration
