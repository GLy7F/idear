import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import Home from '../Pages/Home'
import About from '../Pages/About'
import NotFound from '../Pages/NotFound'
import Login from '../Auth/Login';
import Profile from '../Auth/Profile';
import Register from '../Auth/Register';
import Ideas from '../Ideas/Ideas';
import Create from '../Ideas/Create'
import { logout } from '../../helper';

export default class Navbars extends Component {
  render() {
    return (
      <div>

        <Router>
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Button variant="light" className="nav-link" href="/">Home</Button>
                <Button variant="light" className="nav-link" href="/About">About</Button>

                {localStorage.usertoken ?
                <>
                 <Button variant="light" className="nav-link" href="/Ideas">Tasks</Button>
                 <Button variant="light" className="nav-link" href="/Create">Create Task</Button>

                </>
                : null}
                {!localStorage.usertoken ?
                  <Button variant="light" className="nav-link" href="/Login">Login</Button> : null}

                {!localStorage.usertoken ? <Button variant="light" className="nav-link" href="/Register">Register</Button> : null}

                {localStorage.usertoken ? <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
                </NavDropdown> : null}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>

            <Route path="/" exact component={Home} />

            <Route path="/About" component={About} />
            {!localStorage.usertoken ?
              <>
                <Route path="/Register" component={Register} />
              </>
              : null}
            {!localStorage.usertoken ?
              <>
                <Route path="/Login" component={Login} />
              </>
              : null}
            {localStorage.usertoken ?
              <>
                <Route path="/Profile" component={Profile} />
                <Route path="/Create" component={Create} />
                <Route path="/Ideas" exact component={Ideas} />
              </> : null}
            <Route path="*"  component={NotFound} />
          </Switch>
        </Router>

      </div>
    )
  }
}