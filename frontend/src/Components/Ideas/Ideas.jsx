import React, { Component } from "react";
import moment from "moment";
// import Categories from './Categories'
import { Card, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default class Ideas extends Component {
  state = {
    api_resp: []
  };

  componentDidMount() {
    fetch("/allideas/ideas")
      .then(res => res.json())
      .then(res =>
        this.setState({
          api_resp: res
        })
      );
  }

  render() {
    const { api_resp } = this.state;
    console.log(api_resp);
    // all_ideas.title,all_ideas.description
    return (
      <div style={{ alignItems: "center", margin: "auto" }}>
        <h3>Task to Do !</h3>
        <h5>This is a random tasks to do , Take one of them and challenge yourself to do it.</h5> 
        <br/>
        <br/>
        <Container fluid>
          <Row>
            {api_resp.map(all_ideas => 
              (
                <Col md={3} key={all_ideas._id} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <b>{all_ideas.title}</b>
                      </Card.Title>
                      <Card.Text>
                      <br/><h5>{all_ideas.description}</h5>
                        <i className="d-block">
                        <br/>  <br/> Created by: {" "}
                          {all_ideas.user
                            ? all_ideas.user.first_name
                            : "Anonymous"}{" "}
                            <br/>
                            <small>Last updated {moment(all_ideas.createdAt).fromNow()}</small>
                        </i>
                      </Card.Text>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
// (api_resp != null || api_resp != undefined) ? ):null
