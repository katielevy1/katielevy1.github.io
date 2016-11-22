import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import navbar from './navbar'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
      <div className="N">
       
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <h1 >Katie Levy </h1>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
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
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>




      </div>
      <div className="body">
        
        {this.props.children}
      </div>
      </div>
    
    )  
}
})


