import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import "./Login.css";

class FormsPage extends React.Component  {
  render() {
    return(
      <Container className="mx-auto">
        <section className="form-dark">
              <Card className="card-image animated hoverable" style={{backgroundImage: 'url(../../../public/img/coffee-login.png)'}}>
                <div className="text-white rgba-stylish-light py-5 px-5 z-depth-4">
                  <div className="text-center">
                    <h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a className="green-text font-weight-bold"><strong> UP</strong></a><strong> /</strong><a className="green-text font-weight-bold"><strong> IN</strong></a></h3>
                  </div>
                  <Input className=" animated hoverable text-white" label="Your email" group type="text" validate />
                  <Input label="Your password" className="animated hoverable text-white" group type="password" validate/>
                  <div className="md-form pb-3">
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />
                      <label className="form-check-label white-text" htmlFor="defaultCheck17">Accept the<a href="#" className="green-text font-weight-bold"> Terms and Conditions</a></label>
                    </div>
                  </div>
                  <Row className="d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                      <Button color="success" rounded type="button" className="btn-block z-depth-1  animated hoverable">Sign in</Button>
                    </div>
                  </Row>
                  <Col md="12">
									<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2 white-text"> or Sign in with:</p>
                  <div className="row my-3 d-flex justify-content-center">
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                    <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                  </div>
                  </Col>
                </div>
              </Card>
        </section>
      </Container>
    );
  }
};

export default FormsPage;