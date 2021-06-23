import React from "react";
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

import { useStateValue } from "../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../context/types";
import SelectRoute from "./SelectRoute";
import SelectSeatQty from "./SelectSeatQty";

const SearchBar = ({ handleSubmit }) => {
  const [routeData, dispatch] = useStateValue();
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
      </CardBody>
    </Card>
  );
};

export default SearchBar;
