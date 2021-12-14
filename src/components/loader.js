import React from 'react'
import ipaasLoadersvg from '../assets/images/ipaas-loader.svg'
export default class SVGLoader extends React.Component {
  render() {
    const loaderClass = this.props.loaderClass
    return (
      <div className={'iPaaSLoader ' + loaderClass}>
        <div
          _ngcontent-fxq-c1=""
          className={'ipaas-spinner-loader ng-star-inserted'}
        >
          <div _ngcontent-fxq-c1="" className="ipaas-spinner-logo">
            <img src={ipaasLoadersvg} className="ipaas-spinner-img" />
          </div>
        </div>
      </div>
    )
  }
}
