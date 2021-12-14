import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class CustomerQuote extends Component {
  render() {
    const { title, image, content, designation, xs, sm, md, lg } = this.props
    return (
      <Col xs={xs} sm={sm} md={md} lg={lg}>
        <div className="quoteCol">
          <div className="imgWrap">
            <Image src={image}></Image>
          </div>
          <div className="quoteContent">
            <h4>{title}</h4>
            <span>{designation}</span>
            <p>{content}</p>
          </div>
        </div>
      </Col>
    )
  }
}

export default CustomerQuote
