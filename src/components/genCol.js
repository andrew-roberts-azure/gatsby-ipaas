import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Image,
  Button,
} from 'react-bootstrap'
import { Link } from 'gatsby'

class GenCol extends Component {
  render() {
    const {
      title,
      image,
      button,
      content,
      fluid,
      styles,
      subContent,
      link,
      xs,
      sm,
      md,
      lg,
      clickable,
    } = this.props
    return (
      <Col xs={xs} sm={sm} md={md} lg={lg} className="colSize">
        <div className="genCOl">
          <div className="imgWrap">
            <Image src={image}></Image>
          </div>
          <div className="descArea">
            {title && (
              <h4>
                {title}
                <span>{subContent}</span>
              </h4>
            )}
            {content && <p>{content}</p>}
            {button && (
              <Link className="btn btn-alert" to={link}>
                {button}
              </Link>
            )}
            {clickable && <Link className="clickable" to={clickable}></Link>}
          </div>
        </div>
      </Col>
    )
  }
}

export default GenCol
