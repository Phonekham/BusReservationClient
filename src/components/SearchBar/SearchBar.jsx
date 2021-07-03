import { useLazyQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useStateValue } from "../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../context/types";
import { CHECK_DEPAERTURE_TIME } from "../../graphql/queries";
import SelectRoute from "./SelectRoute";
import SelectSeatQty from "./SelectSeatQty";

const SearchBar = () => {
  const [routeData, dispatch] = useStateValue();
  const history = useHistory();
  const { departureDate, seatQty, route } = routeData;

  const [checkQueryRoute, { data, loading }] = useLazyQuery(
    CHECK_DEPAERTURE_TIME,
    {
      variables: { departureDate, seatQty, route },
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
    <Card className="lao p-3">
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={{ size: 3, offset: 1 }} offset="1" sm="12">
              <FormGroup>
                <Label for="nameMulti">ປາຍທາງ</Label>
                <SelectRoute />
              </FormGroup>
            </Col>
            <Col md="3" offset="1" sm="12">
              <FormGroup>
                <Label for="nameMulti">ວັນທີ</Label>
                <Input
                  className="form-control"
                  type="date"
                  name="depaertureDate"
                  placeholder="dd/MM/yyyy"
                  onChange={(e) =>
                    dispatch({
                      type: SET_QUERY_ROUTE,
                      ...routeData,
                      departureDate: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Col>
            <Col md="3" offset="1" sm="12">
              <FormGroup>
                <Label for="nameMulti">ຈຳນວນຜູ້ໂດຍສານ</Label>
                <SelectSeatQty />
              </FormGroup>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button color="info" type="submit">
              ຄົ້ນຫາລົດ
            </Button>
          </div>
        </Form>
        {loading && (
          <div className="text-center mt-2">
            <Loader type="Circles" color="lightblue" height={200} width={200} />
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default SearchBar;
