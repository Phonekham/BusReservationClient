import React from "react";
import moment from "moment";
import { Badge, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

import PayBookingModal from "../Modal/PayBookingModal2";

const UserBookingTable = ({ bookings }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th className="text-center lao">#</th>
          <th className="text-center lao">ຈອງວັນທີ</th>
          <th className="text-center lao">ວັນທີ່ເດີນທາງ</th>
          <th className="text-center lao">ສາຍທາງ</th>
          <th className="text-center lao">ຖ້ຽວລົດ</th>
          <th className="text-center lao">ສະຖານະ</th>
          <th className="text-center lao">ລາຍລະອຽດ</th>
        </tr>
      </thead>
      <tbody>
        {bookings &&
          bookings.map((b, i) => {
            const {
              createdAt,
              departureTime,
              departureDate,
              route,
              status,
            } = b;

            const renderSatus = (status) => {
              if (status === "pending") {
                return (
                  <Badge color="warning">
                    <h6 className="text-white">ກຳລັງກວດສອບ</h6>
                  </Badge>
                );
              } else if (status === "paid") {
                return (
                  <Badge color="success">
                    <h6 className="text-white">ຈ່າຍແລ້ວ</h6>
                  </Badge>
                );
              } else if (status === "not-pay") {
                return (
                  <Badge color="danger">
                    <h6 className="text-white">ຍັງບໍ່ທັນຊຳລະ</h6>
                  </Badge>
                );
              } else if (status === "issued") {
                return (
                  <Badge color="primary">
                    <h6 className="text-white">ອອກແລ້ວ</h6>
                  </Badge>
                );
              }
            };

            return (
              <tr>
                <th className="lao text-center" scope="row">
                  {i + 1}
                </th>
                <td className="lao text-center">
                  {moment(createdAt).format("DD/MM/YYYY")}
                </td>
                <td className="lao text-center">
                  {moment(departureDate).format("DD/MM/YYYY")}
                </td>
                <td className="lao text-center">{route.routeName}</td>
                <td className="lao text-center">{departureTime.time}</td>
                <td className="lao text-center">{renderSatus(status)}</td>
                <td className="lao text-center">
                  {status === "not-pay" && (
                    <Link to={{ pathname: "pay-booking", state: b.id }}>
                      <Button className="mr-1" color="info">
                        ຊຳລະການສັງຈອງ
                      </Button>
                    </Link>
                  )}
                  <Link to={{ pathname: "booking-detail", state: b.id }}>
                    <Button color="success">ລາຍລະອຽດ</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default UserBookingTable;
