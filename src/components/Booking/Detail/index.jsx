import React from "react";
import moment from "moment";
import { Row, Col, Card, CardBody, CardHeader, DropdownItem } from "reactstrap";

import { numberWithCommas } from "../../../utils/formatNumber";

const BookingDetail = ({ d }) => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Card className="mt-2">
              <CardHeader className="lao bg-info">
                <h4 className="text-center text-white">
                  ລາຍລະອຽດການຈອງປີ້ຂອງທ່ານ
                </h4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <h4>ເລກທີ້ຈອງປີ້</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && d.bookingNo}</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ວັນທີຈອງ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && moment(d.createdAt).format("DD/MM/YYYY")}</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ວັນທີເດີນທາງ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && moment(d.departureDate).format("DD/MM/YYYY")}</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ສາຍທາງ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && d.route.routeName}</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ເວລາອອກເດີນທາງ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && d.departureTime.time}</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ເບີບ່ອນນັ່ງ</h4>
                  </Col>
                  <Col md="6">
                    <h4>
                      {d &&
                        d.bookingItem.map((item) => (
                          <span>{item.seat.seatNo} </span>
                        ))}
                    </h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ລາຄາປີ້</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && numberWithCommas(d.fare)} ກີບ</h4>
                  </Col>
                </Row>
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ເປັນເງິນ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && numberWithCommas(d.totalAmount)} ກີບ</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BookingDetail;
