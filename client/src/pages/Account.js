import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import AccountTabs from "./AccountTabs.js";

class ContactPage extends Component {
  render() {
    return(
      <Container>
        <section className="contact-section my-5">
          <Card>
            <Row>
              <Col lg="12">
                <CardBody className="form">
                  <h3 className="text-center">
                    Update Account
                  </h3>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-name" label="Your name"/>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-email" label="Your email"/>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-phone" label="Your phone"/>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input type="text" id="form-contact-company" label="Your company"/>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="md-form mb-0">
                        <Input type="textarea" id="form-contact-message" label="Your message"/>
                        <button type="button" class="btn btn-default btn-lg btn-block">Update Account Settings</button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
              
            </Row>
						<AccountTabs />
          </Card>
        </section>

      </Container>
    );
  };
}

export default ContactPage;