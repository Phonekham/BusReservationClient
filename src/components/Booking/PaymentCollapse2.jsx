import React, { useState } from "react";
import { Collapse, CardBody, Card, Col, Row } from "reactstrap";

import bcelOneLogo from "../../assets/images/bcelOnelogo.png";
import qrCode from "../../assets/images/qrCode.jpeg";

const PaymentCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Row>
        <Col md="3">
          <Card body outline color="primary">
            <img
              src={bcelOneLogo}
              alt="bcelOneLogo"
              width="100"
              height="100"
              onClick={toggle}
            />
          </Card>
        </Col>
      </Row>
      <Collapse isOpen={isOpen}>
        <Card className="mt-2">
          <CardBody>
            <Row>
              <Col md="6">
                <img
                  src={qrCode}
                  alt="qrcode"
                  width="300"
                  height="300"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default PaymentCollapse;
