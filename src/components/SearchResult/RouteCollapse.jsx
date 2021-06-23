import React, { useState } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const RouteCollapse = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { busType, fare, route, time } = data;

  console.log(data);
  return (
    <Card className="m-2 lao">
      <CardTitle className="text-center mt-2" tag="h5">
        {route.routeName}
      </CardTitle>
      <Row>
        <Col sm="2">
          <div>wew</div>
        </Col>
        <Col sm="2">
          <div>wew</div>
        </Col>
        <Col sm="2">
          <div>wew</div>
        </Col>
        <Col sm="2">
          <div>wew</div>
        </Col>
        <Col sm="2">
          <div className="m-2">
            <Button
              color={isOpen ? "danger" : "primary"}
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              {isOpen ? "ເຊືອງລາຍລະອຽດ" : "ລາຍລະອຽດ"}
            </Button>
          </div>
        </Col>
      </Row>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {route.routeName} Anim pariatur cliche reprehenderit, enim eiusmod
            high life accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
            proident.
          </CardBody>
        </Card>
      </Collapse>
    </Card>
  );
};

export default RouteCollapse;
