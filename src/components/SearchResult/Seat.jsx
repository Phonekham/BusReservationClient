import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdEventSeat } from "react-icons/md";

import "../../assets/scss/customs/seat.scss";
import {
  clearSelectedSeat,
  removeSelectedSeat,
  setSelectedRoute,
  setSelectedSeat,
  setTotal,
} from "../../redux/actions/booking";

const Seat = ({ seat, departureTimeId, fare }) => {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);
  const { selectedSeat, departureTime } = bookingState;

  let selected;
  if (selectedSeat.length >= 1 && departureTime === departureTimeId) {
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
            if (departureTime !== departureTimeId) {
              dispatch(clearSelectedSeat());
              dispatch(setTotal());
            }
            dispatch(setSelectedSeat(seat));
            dispatch(setSelectedRoute(departureTimeId, fare));
            dispatch(setTotal());
          } else {
            dispatch(removeSelectedSeat(seat.id));
            dispatch(setTotal());
          }
        }}
      />
    </div>
  );
};

export default Seat;
