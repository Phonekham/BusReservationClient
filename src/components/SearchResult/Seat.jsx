import React from "react";
import { MdEventSeat } from "react-icons/md";

import "../../assets/scss/customs/seat.scss";
import { useStateValue } from "../../context/seat/provider";
import { REMOVE_SELECTED_SEAT, SET_SELECTED_SEAT } from "../../context/types";

const Seat = ({ seat }) => {
  const [seatData, dispatch] = useStateValue();
  const { selectedSeat } = seatData;
  let selected;

  if (selectedSeat.length >= 1) {
    const ids = selectedSeat.map((s) => s.id);
    selected = ids.includes(seat.id);
  }

  return (
    <div className="the-seat">
      <MdEventSeat
        style={{ cursor: "pointer" }}
        color={selected ? "green" : "grey"}
        size={40}
        onClick={() => {
          if (!selected) {
            dispatch({
              type: SET_SELECTED_SEAT,
              ...seatData,
              selectedSeat: seat,
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
