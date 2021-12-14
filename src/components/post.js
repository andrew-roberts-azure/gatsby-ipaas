import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class Post extends Component {
  render() {
    const { title, image, content, date, link, xs, sm, md, lg } = this.props
    return (
      <Col xs={xs} sm={sm} md={md} lg={lg}>
        <div className="postCol">
          <div className="imgWrap">
            <Image src={image}></Image>
          </div>
          <div className="postShortContent">
            <span>{date}</span>
            <h4>{title}</h4>
            <p>{content}</p>
            <Link to={link}>Read More…</Link>
          </div>
        </div>
      </Col>
    )
  }
}

export default Post
