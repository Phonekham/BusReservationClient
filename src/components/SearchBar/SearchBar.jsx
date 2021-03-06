import { useLazyQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useStateValue } from "../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../context/types";
import { CHECK_DEPAERTURE_TIME } from "../../graphql/queries";
import SelectRoute from "./SelectRoute";

const SearchBar = () => {
  const [routeData, dispatch] = useStateValue();
  const history = useHistory();
  const { departureDate, route } = routeData;

  const [checkQueryRoute, { data, loading }] = useLazyQuery(
    CHECK_DEPAERTURE_TIME,
    {
      variables: { departureDate, route: route.value },
      fetchPolicy: "network-only",
      onError(err) {
        console.log(err);
      },
      onCompleted() {
        history.push({ pathname: "/search-results", state: data });
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkQueryRoute();
  };
  // TODO find the way to set min date
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center lao mt-3">ຄົ້ນຫາ</h3>
        <Row className="m-1">
          <Col md="6" offset="1" sm="12">
            <FormGroup>
              <Label for="nameMulti">ປາຍທາງ</Label>
              <SelectRoute />
            </FormGroup>
          </Col>
          <Col md="6" offset="1" sm="12">
            <FormGroup>
              <Label for="nameMulti">ວັນທີ</Label>
              <Input
                className="form-control"
                type="date"
                name="depaertureDate"
                min={new Date()}
                placeholder="dd/MM/yyyy"
                onChange={(e) =>
                  dispatch({
                    type: SET_QUERY_ROUTE,
                    ...routeData,
                    departureDate: e.target.value,
                  })
                }
              />
              {/* <DatePicker
                className="form-control"
                selected={departureDate && new Date(departureDate)}
                minDate={new Date()}
                onChange={(date) =>
                  dispatch({
                    type: SET_QUERY_ROUTE,
                    ...routeData,
                    departureDate: date,
                  })
                }
                dateFormat="dd/MM/yyyy"
              /> */}
            </FormGroup>
          </Col>
        </Row>
        <div className="text-center m-3 ">
          <Button color="info" type="submit">
            ຄົ້ນຫາ
          </Button>
        </div>
      </Form>
      {loading && (
        <div className="text-center mt-2">
          <Loader type="Circles" color="lightblue" height={200} width={200} />
        </div>
      )}
    </>
  );
};

export default SearchBar;
