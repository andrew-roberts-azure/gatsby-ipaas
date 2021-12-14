import React, { Component } from 'react'
import { Container, Row, div, Image, Button } from 'react-bootstrap'
import ObstacleSingle from './obstacleSingle'
import dummy1 from '../assets/images/obstacle-1.png'
import dummy2 from '../assets/images/obstacle-2.png'
import dummy3 from '../assets/images/obstacle-3.png'
import Slider from 'react-slick'

class Obstacles extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="customerHolder obstacleHolder">
        <div className="headingWithText">
          <h4>Obstacles to Digital Transformation</h4>
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
            <ObstacleSingle
              image={dummy1}
              content='"I am a retails ops expert, not a technology manager, but that is what my job has become."'
            ></ObstacleSingle>
            <ObstacleSingle
              image={dummy2}
              content='"I’ve done this before.  I just need alignment internally and iPaaS.com"'
            ></ObstacleSingle>
            <ObstacleSingle
              image={dummy3}
              content='"When product differentiation was enough we were a rock-solid company, but....'
            ></ObstacleSingle>
            <ObstacleSingle
              image={dummy3}
              content='"When product differentiation was enough we were a rock-solid company, but....'
            ></ObstacleSingle>
          </Slider>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}

export default Obstacles
