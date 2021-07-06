import React from "react";
import { MdEventSeat } from "react-icons/md";

import "../../assets/scss/customs/seat.scss";
import { useStateValue } from "../../context/seat/provider";
import {
  CLEAR_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  SET_SELECTED_ROUTE,
  SET_SELECTED_SEAT,
} from "../../context/types";

const Seat = ({ seat, routeId }) => {
  const [seatData, dispatch] = useStateValue();
  const { selectedSeat } = seatData;
  let selected;

  if (selectedSeat.length >= 1 && seatData.route === routeId) {
    const ids = selectedSeat.map((s) => s.id);
    selected = ids.includes(seat.id);
  }
  console.log(seatData);
  return (
    <div className="the-seat">
      <MdEventSeat
        style={{ cursor: "pointer" }}
        color={selected ? "green" : "grey"}
        size={40}
        onClick={() => {
          if (!selected) {
            if (seatData.route !== routeId) {
              dispatch({
                type: CLEAR_SELECTED_SEAT,
              });
            }
            dispatch({
              type: SET_SELECTED_SEAT,
              ...seatData,
              selectedSeat: seat,
            });
            dispatch({
              type: SET_SELECTED_ROUTE,
              ...seatData,
              route: routeId,
            });
          } else {
            dispatch({
              type: REMOVE_SELECTED_SEAT,
              ...seatData,
              removeId: seat.id,
            });
          }
        }}
      />
    </div>
  );
};

export default Seat;
