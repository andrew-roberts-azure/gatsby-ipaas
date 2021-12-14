import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

class HeaderSearch extends Component {
  closeSearch = () => {
    document.body.classList.remove('show-search')
  }
  render() {
    return (
      <div className="header-search">
        <div className="container clearfix d-flex align-items-center">
          <i className="icon-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.535"
              height="14.019"
              viewBox="0 0 13.535 14.019"
            >
              <path
                id="search"
                d="M14.313,12.769,10.976,9.3A5.658,5.658,0,1,0,6.644,11.32,5.6,5.6,0,0,0,9.887,10.3l3.362,3.5a.738.738,0,1,0,1.064-1.023ZM6.644,1.477A4.184,4.184,0,1,1,2.461,5.66,4.188,4.188,0,0,1,6.644,1.477Z"
                transform="translate(-0.984)"
                fill="#1a1a1a"
              />
            </svg>
          </i>
          <form>
            <input type="text" placeholder="Search for something..." />
          </form>
          <a id="header-search-close" href="#" onClick={this.closeSearch}>
            <i className="fa fa-times"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default HeaderSearch
