import React from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const PassengerForm = () => {
  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>
          ຊື່ເຕັມ
        </Label>
        <Col sm={10}>
          <Input type="text" name="fullname" id="name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          ເບີໂທ
        </Label>
        <Col sm={10}>
          <Input type="text" name="phone" id="phone" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          ອີເມວ
        </Label>
        <Col sm={10}>
          <Input type="email" name="email" id="email" />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default PassengerForm;
