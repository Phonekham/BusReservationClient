import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  CardHeader,
  CardText,
  Button,
  DropdownItem,
} from "reactstrap";
import PassengerForm from "../components/Booking/Form/PassengerForm";

const Booking = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="lao p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col md="8">
                    <Card className="mt-2">
                      <CardHeader className="lao bg-primary text-white">
                        ລາຍລະອຽດຜູ້ໂດຍສານ
                      </CardHeader>
                      <CardBody>
                        <PassengerForm />
                      </CardBody>
                    </Card>
                    <Card className="mt-2">
                      <CardHeader className="lao bg-success text-white">
                        ລາຍລະອຽດຜການຊຳລະເງິນ
                      </CardHeader>
                      <CardBody>ຍັິທຳືະ</CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="mt-2">
                      <CardHeader className="lao bg-info text-white">
                        ລາຍລະອຽດການເດີນທາງ
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h5">ສາຍທາງ</CardTitle>
                        <CardText>ວຽງຈັນ-ປາກເຊ</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ເວລາອອກເດີນທາງ</CardTitle>
                        <CardText>8:00</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ເບີບ່ອນນັ່ງ</CardTitle>
                        <CardText>A4</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ລາຄາປີ້</CardTitle>
                        <CardText>180,000 ກີບ</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
