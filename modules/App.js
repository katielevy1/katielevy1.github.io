import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import navbar from './navbar'
import { LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
      <h1>Katie Levy</h1>
      <div className="navBar">
        <Nav bsStyle="tabs" pullRight={true}>
          <LinkContainer to="">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/resume">
            <NavItem eventKey={2}>Resume</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={3}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/repos">
            <NavItem eventKey={4}>Portfolio</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem eventKey={5}>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </div>
      {this.props.children}
      </div>
    
    )  
}
})


