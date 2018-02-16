import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class SiteNav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (

        <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/create">Create League</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/leagues">Your Leagues</Link>
            </NavItem>
            <NavDropdown eventKey={4} title="Games" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}><Link to="/games">Active</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2}><Link to="/games">Past</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}><Link to="/games">Upcoming</Link></MenuItem>
            </NavDropdown>
            <NavItem eventKey={5}>
              <Link to="/profile">My Profile</Link>
            </NavItem>
            <NavItem eventKey={6}>
               <Logout updateUser={this.props.updateUser} />
            </NavItem>
        </Nav>

        );
    }
    else {
      links = (
        <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/">Create League</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/">Your Leagues</Link>
            </NavItem>
            <NavDropdown eventKey={4} title="Games" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Active</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2}>Past</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Upcoming</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5}>
              <Link to="/">My Profile</Link>
            </NavItem>
            <NavItem eventKey={6}>
              <Link to="/login">Login</Link>
            </NavItem>
        </Nav>  
        );
    }

    return(
        
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Social Networthing</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>       
          {links}
        </Navbar.Collapse>
      </Navbar>

      );
  }
}

export default SiteNav;




