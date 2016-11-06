import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import navbar from './navbar'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <div >
      <div className="header row">
        <LinkContainer to="/">
          <h1 className="name col-sm-3">Katie Levy</h1>
        </LinkContainer>
        <div className="navBar col-sm-9">
          <Nav bsStyle="tabs" pullRight={true}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/resume">
              <NavItem eventKey={2}>Resume</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={3}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={5}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </div>
      </div>
      <div className="body">
        
        {this.props.children}
      </div>
      </div>
    
    )  
}
})


