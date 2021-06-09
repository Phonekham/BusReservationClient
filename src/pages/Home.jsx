import React from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  CardSubtitle,
} from "reactstrap";
import Slider from "react-slick";

import "../assets/scss/customs/Home.scss";
import QueryRouteForm from "../components/Home/Form/QueryRouteForm";

const Home = () => {
  return (
    <section className="p-0 head">
      <Container>
        <Row>
          <Col md="6">
            <Slider className="slide-1 home-slider">
              <div>
                <div className="home home1 text-center">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="slider-contain">
                          <div>
                            <h4>welcome to fashion</h4>
                            <h1>men fashion</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
          <Col md="6" className="lao p-2">
            <Card>
              <CardBody>
                <CardTitle className="text-center" tag="h5">
                  <b>ຄົ້ນຫາຕາຕະລາງລົດ</b>
                </CardTitle>
                <QueryRouteForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
