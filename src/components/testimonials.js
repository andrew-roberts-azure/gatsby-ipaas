import React, { Component } from 'react'
import { Container, Row, Col, Card, CardDeck, Image } from 'react-bootstrap'
import image3 from '../assets/images/testimonials/1.jpg'
import image1 from '../assets/images/testimonials/2.jpg'
import image2 from '../assets/images/testimonials/3.jpg'
import ClientImage1 from '../assets/images/testimonials/client-1.png'
import ClientImage2 from '../assets/images/testimonials/client-2.png'
import ClientImage3 from '../assets/images/testimonials/client-3.png'
import { Link } from 'gatsby'
import Slider from 'react-slick'

class Testimonial extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="testimonialHolder">
        <Container>
          <div className="testimonialSec">
            <div className="subContainer">
              <h4 className="text-center">
                Find out what these businesses already know
              </h4>
              <div className="testimonialCallout text-center">
                <Slider {...settings}>
                  <Card>
                    <div className="cardImgHolder">
                      <a>
                        <Card.Img variant="top" src={image1} />
                      </a>
                    </div>
                    <Card.Body>
                      <Card.Text>Nate Travers, CEO Reebok</Card.Text>
                      <div className="testimonialClientImg">
                        <Image src={ClientImage1} />
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="cardImgHolder">
                      <a>
                        <Card.Img variant="top" src={image2} />
                      </a>
                    </div>
                    <Card.Body>
                      <Card.Text>Aleah Jean Rosales, CEO Reebok</Card.Text>
                      <div className="testimonialClientImg">
                        <Image src={ClientImage2} />
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="cardImgHolder">
                      <a>
                        <Card.Img variant="top" src={image3} />
                      </a>
                    </div>
                    <Card.Body>
                      <Card.Text>Brad Wohlgemuth, CEO Reebok</Card.Text>
                      <div className="testimonialClientImg">
                        <Image src={ClientImage3} />
                      </div>
                    </Card.Body>
                  </Card>
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Testimonial
