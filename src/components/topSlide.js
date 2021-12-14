import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, Button, Image, Carousel } from 'react-bootstrap'
import { Link } from 'gatsby'
import Slider from 'react-slick'

const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL

class TopSlide extends Component {
  /*
  state = {
    home_slider: [],
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/slider/get_home_slider')
      .then(res => {
        const home_slider = res.data
        this.setState({ home_slider })
        this.wrapSlickDot()
        document.getElementsByClassName('topSliderSecLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  wrapSlickDot = () => {
    const wrapperElement = document.createElement('div')
    const slickElement = document.querySelectorAll('.topSlider>ul.slick-dots')
    wrapperElement.className = 'container'
    wrapperElement.appendChild(slickElement[0])
    document.querySelector('.topSlider').append(wrapperElement)
  }
  */

  render() {
    var settings = {
      dots: true,
      arrows: true,
      adaptiveHeight: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    }
    return (
      <div className="topSliderSec">
        {/* <SVGLoader loaderClass="topSliderSecLoader AbsolutePosition" /> */}
        <Slider {...settings} className="topSlider">
          {/* this.state.home_slider.map(home_slider => (
            <div key={home_slider.id}>
              {' '}
              <div className="slideHolder">
                {' '}
                <Container>
                  {' '}
                  <div className="slideContentSec">
                    {' '}
                    <div className="slideCaptionSec">
                      {' '}
                      <h1> {home_slider.title} </h1>{' '}
                      <div
                        className="slideDescContent"
                        dangerouslySetInnerHTML={{
                          __html: home_slider.field_content,
                        }}
                      />{' '}
                      <Form>
                        {' '}
                        <Form.Group controlId="formBasicEmail">
                          {' '}
                          <div className="form-flex">
                            {' '}
                            <Form.Control
                              type="email"
                              placeholder="What applications do you use?"
                            />{' '}
                            <Link
                              to="/applications"
                              className="btn btn-outline-danger"
                            >
                              {' '}
                              Get Started{' '}
                            </Link>{' '}
                          </div>
                        </Form.Group>{' '}
                      </Form>{' '}
                    </div>
                    <div className="slideIllustrationSec">
                      {' '}
                      <Image
                        src={CMS_URL + home_slider.field_cover}
                      ></Image>{' '}
                    </div>
                  </div>
                </Container>{' '}
              </div>
            </div>
          )) */}
          <div>
            {' '}
            <div className="slideHolder">
              {' '}
              <Container className="banner-container">
                {' '}
                <div className="slideContentSec">
                  {' '}
                  <div className="slideCaptionSec">
                    {' '}
                    <h1>Connect all of your</h1> <h1>Retail Applications.</h1>{' '}
                    <h1 className="b-text">Lower cost. Better data.</h1>{' '}
                    <div className="form-flex banner-link-flex">
                      {' '}
                      <Link
                        to="/solution-retail"
                        className="btn btn-outline-danger"
                      >
                        {' '}
                        Learn More &gt;{' '}
                      </Link>{' '}
                    </div>
                  </div>
                </div>
              </Container>{' '}
              <div className="slideIllustrationSec">
                <video
                  loop
                  muted
                  data-autoplay
                  playsInline
                  webkit-playsinline
                  autoPlay
                  className="banner-home"
                >
                  <source
                    src={
                      CMS_URL +
                      '/sites/default/files/2020-06/iPaas20Release20RevBh264.mp4'
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default TopSlide
