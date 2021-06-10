import React from "react";
import Select from "react-select";

import { useStateValue } from "../../../context/queryRoute/provider";
import { SET_QUERY_ROUTE } from "../../../context/types";

const SelectSeatQty = () => {
  const [routeData, dispatch] = useStateValue();

  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  return (
    <Select
      onChange={(e) =>
        dispatch({
          type: SET_QUERY_ROUTE,
          ...routeData,
          seatQty: parseInt(e.value),
        })
      }
      options={options}
      placeholder="-- ຈຳນວນຄົນ --"
    />
  );
};

export default SelectSeatQty;
