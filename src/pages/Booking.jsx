import React from "react";
import { FiUserCheck, FiCreditCard } from "react-icons/fi";
import { useSelector } from "react-redux";
import { BiBus } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  CardHeader,
  CardText,
  DropdownItem,
} from "reactstrap";

import PassengerForm from "../components/Booking/Form/PassengerForm";
import { numberWithCommas } from "../utils/formatNumber";
import PaymentTab from "../components/Booking/Tabs/PaymentTab";
import "../assets/scss/customs/booking.scss";

const Booking = (props) => {
  const bookingState = useSelector((state) => state.booking);
  const { selectedSeat } = bookingState;
  const { state } = props.location;
  const { busType, fare, route, time } = state;

  const total = selectedSeat.length * fare;

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
                        <FiUserCheck size={15} color="white" />{" "}
                        ລາຍລະອຽດຜູ້ໂດຍສານ
                      </CardHeader>
                      <CardBody>
                        <PassengerForm />
                      </CardBody>
                    </Card>
                    <Card className="mt-2">
                      <CardHeader className="lao bg-success text-white">
                        <FiCreditCard size={15} color="white" />{" "}
                        ລາຍລະອຽດການຊຳລະເງິນ
                      </CardHeader>
                      <CardBody>
                        <PaymentTab data={state} />
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="mt-2">
                      <CardHeader className="lao bg-info text-white">
                        <BiBus size={15} color="white" /> ລາຍລະອຽດການເດີນທາງ
                      </CardHeader>
                      <CardBody>
                        <CardTitle tag="h5">ສາຍທາງ</CardTitle>
                        <CardText>{route.routeName}</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ເວລາອອກເດີນທາງ</CardTitle>
                        <CardText>{time}</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ປະເພດລົດ</CardTitle>
                        <CardText>{busType.type}</CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ເບີບ່ອນນັ່ງ</CardTitle>
                        <CardText>
                          {selectedSeat &&
                            selectedSeat.map((seat) => (
                              <span>{seat.seatNo},</span>
                            ))}
                        </CardText>
                        <DropdownItem divider />
                        <CardTitle tag="h5">ລາຄາປີ້</CardTitle>
                        <CardText>{numberWithCommas(fare)} ກີບ</CardText>
                      </CardBody>
                    </Card>
                    <Card className="mt-2">
                      <CardHeader className="lao bg-warning text-white">
                        <FaMoneyCheckAlt size={15} color="white" /> ຍອດເງິນ
                      </CardHeader>
                      <CardBody>
                        <div className="summaryText">
                          <span>ລາຄາປີ້</span>
                          <span>{numberWithCommas(fare)} ກີບ</span>
                        </div>
                        <DropdownItem divider />
                        <div className="summaryText">
                          <span>ຈຳນວນບ່ອນນັ່ງ</span>
                          <span>{selectedSeat.length} ບ່ອນນັ່ງ</span>
                        </div>
                        <DropdownItem divider />
                        <div className="summaryText">
                          <span>ທັງໝົດ</span>
                          <span>{numberWithCommas(total)} ກີບ</span>
                        </div>
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
