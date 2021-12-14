import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/getStarted'
import Banner from '../components/banner'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GenCol from '../components/genCol'
import { globalHistory } from '@reach/router'
import banner1 from '../assets/images/leadership-banner.jpg'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
class App extends Component {
  state = {
    related_personas: [],
    persona_data: {
      metatag: { value: { title: null, description: null, abstract: null } },
      title: [{ value: '' }],
      field_banner_title: [{ value: null }],
      field_banner: [{ url: null }],
      field_description_short: [{ value: '' }],
      field_position_full: [{ value: '' }],
      field_position_short: [{ value: '' }],
      field_problem: [{ value: '' }],
      field_profile_picture: [{ url: '' }],
      field_solution: [{ value: '' }],
      field_quote: [{ value: '' }],
      field_url_slug: [{ value: '' }],
      path: [{ alias: '' }],
    },
    last_persona_id: null,
    persona_class: null,
  }

  removeExtraLoaders = () => {
    document
      .querySelectorAll('.topSliderSecLoader, .leadershipHolderLoader')
      .forEach(el => el.remove())
  }

  componentDidUpdate() {
    this.removeExtraLoaders()
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const page_name = url_segs[1]
    const persona_id = url_segs[2]
    const last_persona_id = this.state.last_persona_id
    if (this.state.persona_class == null) {
      this.setState({ persona_class: 'persona' })
      var PersonaLoader = document.getElementsByClassName('PersonaLoader')[0]
      if (typeof PersonaLoader !== 'undefined') {
        document.getElementsByClassName('PersonaLoader')[0].remove()
      }
    }

    setTimeout(function() {
      var maintag = document.getElementsByTagName('main')[0]
      if (page_name == 'persona') {
        maintag.classList.add('persona')
      } else {
        maintag.classList.remove('persona')
      }
    }, 200)

    if (last_persona_id == null || last_persona_id != persona_id) {
      this.setState({ last_persona_id: persona_id })

      axios
        .get(
          CMS_API_URL +
            'v1/personas/persona/by_url_alias_path?by_url_alias_path=/' +
            persona_id
        )
        .then(res => {
          const persona_data = res.data[0]
          this.setState({ persona_data })
        })
        .catch(error => {
          console.log(error.response)
        })

      axios
        .get(
          CMS_API_URL +
            'v1/personas/related_by_url_alias?by_url_alias_path=/' +
            persona_id
        )
        .then(rel_res => {
          const related_personas = rel_res.data
          this.setState({ related_personas })
          var relatedPersonasLoader = document.getElementsByClassName(
            'relatedPersonasLoader'
          )[0]
          if (typeof relatedPersonasLoader !== 'undefined') {
            document.getElementsByClassName('relatedPersonasLoader')[0].remove()
          }
          document.querySelector('.persona.home .integrationSec').remove() //remove loader because of rendering bug of react/gatsby
        })
        .catch(error => {})
    }
  }

  componentDidMount() {
    this.removeExtraLoaders()
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const page_name = url_segs[1]
    const persona_id = url_segs[2]

    setTimeout(function() {
      var maintag = document.getElementsByTagName('main')[0]
      if (page_name == 'persona') {
        maintag.classList.add('persona')
      } else {
        maintag.classList.remove('persona')
      }
    }, 200)

    axios
      .get(
        CMS_API_URL +
          'v1/personas/persona/by_url_alias_path?by_url_alias_path=/' +
          persona_id
      )
      .then(res => {
        const persona_data = res.data[0]
        this.setState({ persona_data })
        var PersonaLoader = document.getElementsByClassName('PersonaLoader')[0]
        if (typeof PersonaLoader !== 'undefined') {
          document.getElementsByClassName('PersonaLoader')[0].remove()
        }
      })
      .catch(error => {
        console.log(error.response)
      })

    axios
      .get(
        CMS_API_URL +
          'v1/personas/related_by_url_alias?by_url_alias_path=/' +
          persona_id
      )
      .then(rel_res => {
        const related_personas = rel_res.data
        this.setState({ related_personas })
        var relatedPersonasLoader = document.getElementsByClassName(
          'relatedPersonasLoader'
        )[0]
        if (typeof relatedPersonasLoader !== 'undefined') {
          document.getElementsByClassName('relatedPersonasLoader')[0].remove()
        }
        document.querySelector('.persona.home .integrationSec').remove() //remove loader because of rendering bug of react/gatsby
      })
      .catch(error => {
        //
      })
  }

  render() {
    const page_url = globalHistory.location.href
    const this_state = this.state

    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    return (
      <>
        <Layout>
          <SEO
            url={page_url}
            title={this.state.persona_data.metatag.value.title}
            image={this.state.persona_data.field_profile_picture[0].url}
            description={this.state.persona_data.metatag.value.description}
          />

          <main className="persona">
            <Banner
              title={this.state.persona_data.field_banner_title[0].value}
              fluid="true"
              image={this.state.persona_data.field_banner[0].url}
            />
            <div className="leadershipMemberSec">
              {/* <SVGLoader loaderClass="PersonaLoader" /> */}
              <Container>
                <div className="leadershipMemberContent">
                  <div className="leaderDtailSec">
                    <div className="leaderImgSec">
                      {/* <Image src={dummy1}></Image> */}
                      <Image
                        src={
                          this.state.persona_data.field_profile_picture[0].url
                        }
                      ></Image>
                    </div>
                    <h4>
                      Meet {this.state.persona_data.title[0].value},{' '}
                      {this.state.persona_data.field_position_full[0].value}
                    </h4>
                    <h6>The Problem</h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.persona_data.field_problem[0].value,
                      }}
                    />
                    <h6>The Solution</h6>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.persona_data.field_solution[0].value,
                      }}
                    />
                    <div className="leaderTagLineSp">
                      <div className="leaderTagLineHolder">
                        <div className="leaderTagLineSec">
                          <p>{this.state.persona_data.field_quote[0].value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="leadershipBanner">
              <Image className="w-100" src={banner1}></Image>
            </div>
            <div className="leadershipCalloutSec">
              <div className="customerSec secPad litBg">
                <Container>
                  <h2 className="genHeading">
                    But it’s not just about one department...keep reading!
                  </h2>
                  <SVGLoader loaderClass="relatedPersonasLoader" />
                  <Row className="relatedPersonas">
                    {this.state.related_personas.map(related_personas => (
                      <GenCol
                        image={related_personas.field_profile_picture[0].url}
                        title={related_personas.field_position_short[0].value}
                        content={
                          related_personas.field_description_short[0].value
                        }
                        button="Read More"
                        link={'/persona' + related_personas.path[0].alias}
                      ></GenCol>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>

            <GetStarted />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
