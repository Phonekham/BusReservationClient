import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

import { setPassengerInfo } from "../../../redux/actions/booking";
import { QUERY_USER } from "../../../graphql/queries";

const PassengerForm = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const bookingState = useSelector((state) => state.booking);

  const { user } = authState.userData;
  const { data } = useQuery(QUERY_USER, { variables: { id: user } });
  const { fullname, tel, email } = bookingState;

  useEffect(() => {
    data &&
      dispatch(
        setPassengerInfo({
          ...bookingState,
          fullname: `${data.user.firstname} ${data.user.lastname}`,
          tel: data.user.phone,
          email: data.user.email,
        })
      );
    return () => {
      dispatch(
        setPassengerInfo({
          ...bookingState,
          fullname: "",
          tel: "",
          email: "",
        })
      );
    };
  }, [data]);

  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>
          ຊື່ເຕັມ
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            onChange={(e) =>
              dispatch(
                setPassengerInfo({ ...bookingState, fullname: e.target.value })
              )
            }
            value={fullname}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          ເບີໂທ
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            onChange={(e) =>
              dispatch(
                setPassengerInfo({ ...bookingState, tel: e.target.value })
              )
            }
            value={tel}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          ອີເມວ
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            onChange={(e) =>
              dispatch(
                setPassengerInfo({ ...bookingState, email: e.target.value })
              )
            }
            value={email}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default PassengerForm;
