import React, { Component } from 'react';
import { Container, Row, Col, Fa, CardFooter, CardBody,Card, CardText, CardTitle, Button } from 'mdbreact';

class PWOO extends Component {
  render() {
    return(
      <Container style={{maxWidth: '80%'}}>
<Card cascade>
    <CardBody cascade>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    </CardBody>
    <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
        <ul className="list-unstyled list-inline font-small">
            <li className="list-inline-item pr-2 white-text"><Fa icon="clock-o"></Fa> 05/10/2015</li>
        </ul>
    </div>
</Card>
      </Container>
    );
  }
}

export default PWOO;