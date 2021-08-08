import React from "react";
import { Col } from "reactstrap";
import { TiTick, TiTimes } from "react-icons/ti";

import { numberWithCommas } from "../../utils/formatNumber";

const RouteInfo = ({ time, busType, fare, isBookable }) => {
  return (
    <>
      <Col sm="2">
        <h4 className="text-center">ເວລາລົດອອກ</h4>
        <h5 className="text-center">{time}</h5>
      </Col>
      <Col sm="2">
        <h4 className="text-center">ປະເພດລົດ</h4>
        <h5 className="text-center">{busType.type}</h5>
      </Col>
      <Col sm="2">
        <h4 className="text-center">ຄ່າໂດຍສານ</h4>
        <h5 className="text-center">{numberWithCommas(fare)} ກີບ</h5>
      </Col>
      <Col sm="2">
        <h4 className="text-center">ສາມາດຈອງໄດ້</h4>
        <div className="text-center">
          {isBookable ? (
            <TiTick color="green" className="mr-50" size={25} />
          ) : (
            <TiTimes color="red" className="mr-50" size={25} />
          )}
        </div>
      </Col>
    </>
  );
};

export default RouteInfo;
