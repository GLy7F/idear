import React, { Component } from 'react'
import { Card, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default class About extends Component {
    render() {
        return (
            <div>
                  <br/>
                  <br/>
                  <br/>
               <h3>About us</h3> 
                <br/>
                <br/>

                <br/>

                <br/>

                <br/>

                <br/>

                <br/>


                <Container fluid>
          <Row>
                <div>
                <Col md={6}  className="mb-3">
                <Card  style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src="https://avatars1.githubusercontent.com/u/48391702?s=460&v=4"   height="246" width="246"/>
  <br/>  <br/>  
    <Card.Title>Hamed Alsoubhi</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">front-end developer</Card.Subtitle>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Card.Link href="https://github.com/BoSHeCa"target="_blank">Github</Card.Link>
    <Card.Link href="https://www.linkedin.com/in/ithamed" target="_blank">Linkedin</Card.Link>
  </Card.Body>
</Card>
</Col>
</div>
<div>
<Col md={6}  className="mb-3">
<Card style={{ width: '18rem' }}>
  <Card.Body>
  
    <Card.Img variant="top" src="https://1.top4top.net/p_1448pg8ss1.jpg" height="246" width="246"/>
  <br/>  <br/> 
     <Card.Title>Abdullah Alsharif</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">back-end developer</Card.Subtitle>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Card.Link href="https://github.com/aalsharif93">Github</Card.Link>
    {/* <Card.Link href="#">Linkedin</Card.Link> */}
  </Card.Body>
</Card>
</Col>
</div>
</Row>
        </Container>
            </div>
        )
    }
}
