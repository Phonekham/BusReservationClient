import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, CardBody, Card, Col, Row, Button } from "reactstrap";

import bcelOneLogo from "../../assets/images/bcelOnelogo.png";
import qrCode from "../../assets/images/qrCode.jpeg";
import { setPayment } from "../../redux/actions/booking";
import FileUpload from "./FileUpload";

const PaymentCollapse = () => {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);
  const { payNow } = bookingState;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSetPay = (bool) => {
    dispatch(
      setPayment({
        ...bookingState,
        payNow: bool,
        status: bool === true ? "pending" : "not-pay",
      })
    );
  };

  return (
    <div>
      <div>
        <Button
          outline={!payNow}
          color="primary"
          onClick={() => handleSetPay(true)}
        >
          ຈ່າຍຕອນນີ້
        </Button>{" "}
        <Button
          outline={payNow}
          color="primary"
          onClick={() => handleSetPay(false)}
        >
          ຈ່າຍພາຍຫຼັງ
        </Button>
      </div>
      <Row className="mt-2">
        <Col md="3">
          <Card
            body
            outline
            color="primary"
            style={{ display: `${payNow ? "block" : "none"}` }}
          >
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
        <Card
          className="mt-2"
          style={{ display: `${payNow ? "block" : "none"}` }}
        >
          <CardBody>
            <Row>
              <Col md="6">
                <div className="text-center">
                  <h4>ຊື່ບັນຊີ: Phonekham Keomany</h4>
                  <h4>ເລກບັນຊີ: 6582 3658 25487 23658</h4>
                </div>
                <img
                  src={qrCode}
                  alt="qrcode"
                  width="300"
                  height="300"
                  className="img-fluid"
                />
              </Col>
              <Col md="6">
                <FileUpload />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default PaymentCollapse;
