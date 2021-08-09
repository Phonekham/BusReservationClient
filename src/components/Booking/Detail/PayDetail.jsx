import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  DropdownItem,
  Badge,
  Button,
  Spinner,
  Form,
  Alert,
} from "reactstrap";

import { numberWithCommas } from "../../../utils/formatNumber";
import PayFileUpload from "../FilePayUpload";
import { PAY_BOOKING } from "../../../graphql/mutations";
import { clearPayBooking } from "../../../redux/actions/payBooking";

const PayDetail = ({ d, refetch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const payBookingState = useSelector((state) => state.payBooking);
  const { paymentImage, paymentStatus, paymentDate } = payBookingState;

  const [payBooking, { error, loading }] = useMutation(PAY_BOOKING, {
    variables: {
      bookingId: d && d.id,
      input: {
        paymentDate,
        paymentImage,
        paymentStatus,
      },
    },
    onCompleted: (data) => {
      if (data) {
        toast.success(
          `ການຊຳລະສຳເລັດແລ້ວ ໜ່ວຍງານຂອງເຮົາກຳລົງກວດສອບຂໍ້ມູນຂອງທ່ານ`,
          {
            position: "top-center",
            autoClose: 3000,
            className: "lao",
          }
        );
        dispatch(clearPayBooking());
        refetch();
        history.push({
          pathname: "/user-bookings",
        });
      }
    },
    onError(err) {
      console.log(err);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await payBooking();
  };

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
    }
  };

  return (
    <Card>
      <CardBody>
        <Row>
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
                <DropdownItem divider />
                <Row>
                  <Col md="6">
                    <h4>ສະຖານະ</h4>
                  </Col>
                  <Col md="6">
                    <h4>{d && renderSatus(d.status)}</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Form onSubmit={handleSubmit}>
              <PayFileUpload error={error} />
              <div className="text-center">
                <Button color="success" type="submit">
                  {loading && <Spinner size="sm" color="light" />}
                  ຢືນຢັນການຊຳລະ
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PayDetail;
