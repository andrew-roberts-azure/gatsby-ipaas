import React, { Component } from 'react'
import { Container, Row, Col, Card, CardDeck, Image } from 'react-bootstrap'
import axios from 'axios'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL

class Team extends Component {
  state = {
    team_list: [],
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/teams/company_overview')
      .then(res => {
        const team_list = res.data
        this.setState({ team_list })
        document.getElementsByClassName('CompanyLoaderTeam')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="teamHolder">
        <Container>
          <div className="teamSec">
            <div className="text-center headingWithText">
              <h4>OUR TEAM</h4>
            </div>
            <div className="teamCallout text-center">
              <SVGLoader loaderClass="CompanyLoaderTeam" />
              <CardDeck>
                {this.state.team_list.map(team_list => (
                  <Card>
                    {' '}
                    <div className="cardImgHolder">
                      <Card.Img
                        variant="top"
                        src={team_list.field_picture[0].url}
                      />
                    </div>
                    <Card.ImgOverlay>
                      <div className="teamCaptionHolder">
                        {' '}
                        <div className="teamCaptionContent">
                          {' '}
                          <h6 className="card-heading">
                            {team_list.title[0].value}
                          </h6>{' '}
                          <Card.Text>
                            {team_list.field_position_designation[0].value}
                          </Card.Text>{' '}
                        </div>{' '}
                        <div className="teamCaptionSocial">
                          {' '}
                          <a
                            href={team_list.field_linkedin_link[0].value}
                            target="_blank"
                          >
                            {' '}
                            <i className="fab fa-linkedin"></i>{' '}
                          </a>{' '}
                        </div>{' '}
                      </div>{' '}
                    </Card.ImgOverlay>{' '}
                  </Card>
                ))}
              </CardDeck>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Team
