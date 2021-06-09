import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import { Button, Col, Form, FormGroup, Label } from "reactstrap";

import SelectRoute from "../Select/SelectRoute";
import { SET_QUERY_ROUTE } from "../../../constants/ActionTypes";
import SelectSeatQty from "../Select/SelectSeatQty";
import { useLazyQuery } from "@apollo/client";

import { CHECK_DEPAERTURE_TIME } from "../../../graphql/queries";

const QueryRouteForm = () => {
  const queryRouteState = useSelector((state) => state.queryRoute);
  const dispatch = useDispatch();
  const { departureDate, seatQty, route } = queryRouteState;

  const [checkQueryRoute, { data, error, loading }] = useLazyQuery(
    CHECK_DEPAERTURE_TIME,
    {
      variables: { departureDate, seatQty, route },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkQueryRoute();
  };
  console.log(data);
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label md="3" for="birthDate">
          ສາຍທາງ
        </Label>
        <Col md="9">
          <SelectRoute />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md="3" for="birthDate">
          ວັນທີ່ເດີນທາງ
        </Label>
        <Col md="9">
          <DatePicker
            className="form-control"
            selected={departureDate && new Date(departureDate)}
            onChange={(date) =>
              dispatch({
                type: SET_QUERY_ROUTE,
                ...queryRouteState,
                departureDate: date,
              })
            }
            dateFormat="dd/MM/yyyy"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md="3" for="birthDate">
          ຈຳນວນຄົນ
        </Label>
        <Col md="9">
          <SelectSeatQty />
        </Col>
      </FormGroup>
      <div className="text-center">
        <Button color="info" type="submit">
          <FaSearch size={16} color="white" /> ຄົ້ນຫາ
        </Button>
      </div>
    </Form>
  );
};

export default QueryRouteForm;
