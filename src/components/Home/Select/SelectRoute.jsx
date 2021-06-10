import React from "react";
import { useQuery } from "@apollo/client";
import Select from "react-select";

import { QUERY_ROUTES } from "../../../graphql/queries";
import { useStateValue } from "../../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../../context/types";

const SelectRoute = () => {
  const { data } = useQuery(QUERY_ROUTES);
  const [routeData, dispatch] = useStateValue();

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
          ...routeData,
          route: e.value,
        })
      }
      options={options}
      placeholder="-- ເລືອກສາຍທາງ --"
    />
  );
};

export default SelectRoute;
