import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import { Button, Col, Form, FormGroup, Label } from "reactstrap";

import SelectRoute from "../Select/SelectRoute";
import SelectSeatQty from "../Select/SelectSeatQty";
import { useStateValue } from "../../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../../context/types";

const QueryRouteForm = ({ checkQueryRoute, loading }) => {
  const [routeData, dispatch] = useStateValue();
  const { departureDate, route, seatQty } = routeData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkQueryRoute();
  };

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
                ...routeData,
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
        <Button
          color="info"
          type="submit"
          disabled={!departureDate || route === "" || seatQty === 0 || loading}
        >
          <FaSearch size={16} color="white" /> ຄົ້ນຫາ
        </Button>
      </div>
    </Form>
  );
};

export default QueryRouteForm;
