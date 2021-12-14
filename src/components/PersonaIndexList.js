import React from 'react'
import axios from 'axios'
import ObstacleSingle from '../components/obstacleSingle'
import SVGLoader from '../components/loader'

const CMS_API_URL = process.env.CMS_API_URL

export default class PersonaIndexList extends React.Component {
  state = {
    persona_list: [],
  }

  componentDidMount() {
    axios
      .get(CMS_API_URL + 'v1/personas/why-ipaas')
      .then(res => {
        const persona_list = res.data
        this.setState({ persona_list })
        document.getElementsByClassName('PersonaListLoader')[0].remove()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="PersonasList">
        <SVGLoader loaderClass="PersonaListLoader" />
        {this.state.persona_list.map(persona_list => (
          <ObstacleSingle
            image={persona_list.field_profile_picture[0].url}
            link={'/persona' + persona_list.path[0].alias}
            content={persona_list.field_description_short[0].value}
            title={
              persona_list.title[0].value +
              ' (' +
              persona_list.field_position_short[0].value +
              ')'
            }
          ></ObstacleSingle>
        ))}
      </div>
    )
  }
}
