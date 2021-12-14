import React, { Component } from 'react'
import { Container, Row, div, Image } from 'react-bootstrap'
import qouteImg from '../assets/images/qoute.svg'
import Slider from 'react-slick'

class Feedback extends Component {
  render() {
    var settings = {
      dots: true,
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
      <div className="customerHolder">
        <Container>
          <div className="headingWithText">
            <h4>Our Customers Love what we do</h4>
            <div className="textWrap">
              <p>
                cis dolor culpa velit consequat tempor aute eu irure anim
                incididunt deserunt est dolore. Reprehenderit consequat dolore
                nostrud est.{' '}
              </p>
            </div>
          </div>
          <div className="customerSliderHolder">
            <Slider {...settings}>
              <div>
                <div className="singleFeedback">
                  <div className="singleFeedbackContent">
                    <div className="feedbackSay">
                      <Image src={qouteImg}></Image>
                      <blockquote>
                        "I am a retails ops expert, not a technology manager,
                        but that is what my job has become."
                      </blockquote>
                    </div>
                    <div className="bottomStick">
                      <div className="textWithAvtar">
                        <div className="avtarSec"></div>
                        <div className="titleSec">
                          <h5>Stefany</h5>
                          <span>Operational Expert </span>
                        </div>
                      </div>
                      <div className="btnSec">
                        <a className="btn btn-outline-dark btn-block">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="singleFeedbackLineDraw"></div>
                </div>
              </div>
              <div>
                <div className="singleFeedback">
                  <div className="singleFeedbackContent">
                    <div className="feedbackSay">
                      <Image src={qouteImg}></Image>
                      <blockquote>
                        "I've done this before. I just need alignment internally
                        and iPaaS.com"
                      </blockquote>
                    </div>
                    <div className="bottomStick">
                      <div className="textWithAvtar">
                        <div className="avtarSec"></div>
                        <div className="titleSec">
                          <h5>Stefany</h5>
                          <span>Operational Expert </span>
                        </div>
                      </div>
                      <div className="btnSec">
                        <a className="btn btn-outline-dark btn-block">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="singleFeedbackLineDraw"></div>
                </div>
              </div>
              <div>
                <div className="singleFeedback">
                  <div className="singleFeedbackContent">
                    <div className="feedbackSay">
                      <Image src={qouteImg}></Image>
                      <blockquote>
                        "When product differentiation was enough we were a
                        rock-solid company, but....
                      </blockquote>
                    </div>
                    <div className="bottomStick">
                      <div className="textWithAvtar">
                        <div className="avtarSec"></div>
                        <div className="titleSec">
                          <h5>Stefany</h5>
                          <span>Operational Expert </span>
                        </div>
                      </div>
                      <div className="btnSec">
                        <a className="btn btn-outline-dark btn-block">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="singleFeedbackLineDraw"></div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    )
  }
}

export default Feedback
