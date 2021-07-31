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
        route,
        seat,
        departureDate,
        departureTime,
        fare,
        totalAmount,
      },
    },
    onCompleted: (data) => {
      if (data) {
        toast.success(`ການເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ`, {
          position: "top-center",
          autoClose: 3000,
          className: "lao",
        });
        dispatch(clearBooking());
        history.push("/");
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
                    ຢືນຢັນການຈອງ
                  </Button>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Form>
      </TabContent>
    </div>
  );
};

export default PaymentTab;
