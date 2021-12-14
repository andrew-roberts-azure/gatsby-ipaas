import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class ClassicSearch extends Component {
  render() {
    const { title, image, content, fluid, styles, subContent } = this.props
    return (
      <div className="classicSearch" style={styles}>
        <Container fluid={fluid}>
          <div className="search_wrap">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Enter application name" />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </Container>
      </div>
    )
  }
}

export default ClassicSearch
