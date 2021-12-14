import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class ObstacleSingle extends Component {
  render() {
    const { image, content, title, link = '/why-ipaas' } = this.props
    return (
      <div className="obstaclePad">
        <div className="obstacleCallout">
          <div className="obstacleContentSp">
            <div className="obstacleContent">
              <div className="obstacleContentHolder">
                <div className="obstacleBy">
                  <p>{title}</p>
                </div>
                <p>{content}</p>
                <Link to={link} className="btn btn-outline-dark btn-sm">
                  read more
                </Link>
              </div>
            </div>
            <div className="obstacleAvatar">
              <Image src={image}></Image>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ObstacleSingle
