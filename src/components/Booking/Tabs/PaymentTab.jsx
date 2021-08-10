import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiBankCard2Fill } from "react-icons/ri";
import classnames from "classnames";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Spinner,
} from "reactstrap";

import PaymentCollapse from "../PaymentCollapse";
import { BOOK_TICKET } from "../../../graphql/mutations";
import { useStateValue } from "../../../context/queryRoute/provider";
import "../styles.scss";
import { clearBooking } from "../../../redux/actions/booking";

const PaymentTab = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);
  const authState = useSelector((state) => state.auth);
  const { userData } = authState;
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [routeData] = useStateValue();
  const { departureDate, route } = routeData;
  const {
    seat,
    payNow,
    paymentImage,
    paymentStatus,
    paymentDate,
    email,
    fullname,
    tel,
    fare,
    departureTime,
    totalAmount,
    status,
  } = bookingState;

  const [bookTicket, { error, loading }] = useMutation(BOOK_TICKET, {
    variables: {
      input: {
        payNow,
        paymentDate,
        paymentImage,
        paymentStatus,
        email,
        fullname,
        tel,
        route: route.value,
        seat,
        departureDate,
        departureTime,
        fare,
        totalAmount,
        member: userData.id,
        status,
      },
    },
    onCompleted: (data) => {
      if (data) {
        toast.success(
          `ການຈອງປີ້ສຳເລັດແລ້ວ ໜ່ວຍງານຂອງເຮົາກຳລົງກວດສອບຂໍ້ມູນຂອງທ່ານ`,
          {
            position: "top-center",
            autoClose: 3000,
            className: "lao",
          }
        );
        dispatch(clearBooking());
        history.push({
          pathname: "/booking-detail",
          state: data.bookTicket.id,
        });
        window.location.reload(false);
      }
    },
    onError(err) {
      console.log(err);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookTicket();
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={{ cursor: "pointer" }}
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <RiBankCard2Fill size={15} color="black" /> ຊຳລະດ້ວຍບໍລິການທະນາຄານ
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <Form onSubmit={handleSubmit}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className="mt-2" style={{ cursor: "pointer" }}>
                <PaymentCollapse />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md="12">
                <div className="text-center">
                  <Button color="success" type="submit">
                    {loading && <Spinner size="sm" color="light" />}
                    ຢືນຢັນການຈອງ
                  </Button>
                </div>
              </Col>
            </Row>
            {error &&
              error.graphQLErrors.map(({ message }, i) => (
                <Alert color="danger">
                  <div key={i}>{message}</div>
                </Alert>
              ))}
          </TabPane>
        </Form>
      </TabContent>
    </div>
  );
};

export default PaymentTab;
