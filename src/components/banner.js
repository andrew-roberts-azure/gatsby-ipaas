import React, { Component } from 'react'
import { Container, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class Banner extends Component {
  render() {
    const { title, image, fluid, styles, icon } = this.props
    return (
      <div className="banner" style={styles}>
        <Container fluid={fluid}>
          <div className="bannerContent row">
            <div className="bannerCaptionSec">
              {title && (
                <div className="title_bg">
                  {title && <h1>{title}</h1>}
                  {icon && (
                    <h1>
                      <Image src={icon}></Image>
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
        <div className="bannerImgSec">
          <Image src={image}></Image>
        </div>
      </div>
    )
  }
}

export default Banner
