import React from "react";
import { Col } from "reactstrap";

const RouteInfo = ({ time, busType, fare }) => {
  return (
    <>
      <Col sm="2">
        <h4 className="text-center">ເວລາລົດອອກ</h4>
        <p className="text-center">{time}</p>
      </Col>
      <Col sm="2">
        <h4 className="text-center">ປະເພດລົດ</h4>
        <p className="text-center">{busType.type}</p>
      </Col>
      <Col sm="2">
        <h4 className="text-center">ຄ່າໂດຍສານ</h4>
        <p className="text-center">{fare}</p>
      </Col>
      <Col sm="2">
        <div className="text-center">wew</div>
      </Col>
    </>
  );
};

export default RouteInfo;
