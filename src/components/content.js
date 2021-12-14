import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class Content extends Component {
  render() {
    const { title, image, content, fluid, styles, subContent } = this.props
    return (
      <div className="simpleContent" style={styles}>
        <Container fluid={fluid}>
          <div className="content">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </Container>
      </div>
    )
  }
}

export default Content
