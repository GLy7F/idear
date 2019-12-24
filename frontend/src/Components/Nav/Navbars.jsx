import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Home from '../Pages/Home'
import About from '../Pages/About'
import NotFound from '../Pages/NotFound'
import Login from '../Auth/Login';
// import Changepass from '../Auth/Changepass';
import Profile from '../Auth/Profile';
import Register from '../Auth/Register';
import Ideas from '../Ideas/Ideas';
import Create from '../Ideas/Create';
import {logout} from '../../helper';

export default class Navbars extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar bg="light">
    <Navbar.Brand href="/">idear</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/About">About</Nav.Link>
      {!localStorage.usertoken ?     
<>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/Register">Register</Nav.Link>
</>:null}
 {localStorage.usertoken ?     
<>
      <Nav.Link href="/Ideas">Tasks</Nav.Link>
      <Nav.Link href="/Create">Create Task</Nav.Link>
</>:null}

{localStorage.usertoken ?     

      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
       
       
      </NavDropdown>
 :null}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
       
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            {localStorage.usertoken ?
                <>
             <Route path="/Profile" component={Profile} />
            <Route path="/Create" component={Create} />
            <Route path="/Ideas" exact component={Ideas} />
            </> :null } 
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}