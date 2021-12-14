import React, { Component } from 'react'
import { Container, Row, Col, Card, CardDeck, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class Callout extends Component {
  render() {
    const {
      title,
      image,
      content,
      fluid,
      styles,
      subContent,
      link,
      OpenNewTab,
    } = this.props
    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="globalCard">
          <div className="cardImgHolder">
            <a href={link} target={OpenNewTab}>
              <Card.Img variant="top" src={image} />
            </a>
          </div>
          <Card.Body>
            <h6 className="card-heading">{title}</h6>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default Callout
