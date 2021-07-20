import React from "react";
import { useSelector } from "react-redux";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const PassengerForm = () => {
  const authState = useSelector((state) => state.auth);
  const { email, phone, firstname } = authState.userData;
  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>
          ຊື່ເຕັມ
        </Label>
        <Col sm={10}>
          <Input type="text" name="fullname" id="name" value={firstname} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          ເບີໂທ
        </Label>
        <Col sm={10}>
          <Input type="text" name="phone" id="phone" value={phone} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          ອີເມວ
        </Label>
        <Col sm={10}>
          <Input type="email" name="email" id="email" value={email} />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default PassengerForm;
