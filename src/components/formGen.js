import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class FormGeneral extends Component {
  render() {
    const { title, image, content, fluid, styles, subContent } = this.props
    return (
      <div className="formHolder">
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>First Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Phone Number</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Comapny Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Project timeframe</Form.Label>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Last Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Job type</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Job Title</Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control className="inputMod" type="text" />
                <Form.Label>Email Subject</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="inputMod" as="textarea" rows="3" />
            <Form.Label>Example textarea</Form.Label>
          </Form.Group>

          <Button variant="primary" className=" btn-redBorder" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default FormGeneral
