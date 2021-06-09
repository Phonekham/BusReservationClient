import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import Select from "react-select";

import { QUERY_ROUTES } from "../../../graphql/queries";
import { SET_QUERY_ROUTE } from "../../../constants/ActionTypes";

const SelectRoute = () => {
  const { data } = useQuery(QUERY_ROUTES);

  const queryRouteState = useSelector((state) => state.queryRoute);
  const dispatch = useDispatch();

  const options =
    data &&
    data.routes.map((r) => ({
      value: r.id,
      label: r.routeName,
    }));

  return (
    <Select
      onChange={(e) =>
        dispatch({
          type: SET_QUERY_ROUTE,
          ...queryRouteState,
          route: e.value,
        })
      }
      options={options}
      placeholder="-- ເລືອກສາຍທາງ --"
    />
  );
};

export default SelectRoute;
