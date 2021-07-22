import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdEventSeat } from "react-icons/md";

import "../../assets/scss/customs/seat.scss";
import {
  clearSelectedRoute,
  clearSelectedSeat,
  removeSelectedSeat,
  setSelectedRoute,
  setSelectedSeat,
} from "../../redux/actions/booking";

const Seat = ({ seat, routeId }) => {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);
  const { selectedSeat, route } = bookingState;

  let selected;
  if (selectedSeat.length >= 1 && route === routeId) {
    const ids = selectedSeat.map((s) => s.id);
    selected = ids.includes(seat.id);
  }
  console.log(selectedSeat.length);
  return (
    <div className="the-seat">
      <MdEventSeat
        style={{ cursor: "pointer" }}
        color={selected ? "green" : "grey"}
        size={40}
        onClick={() => {
          if (!selected) {
            if (route !== routeId) {
              dispatch(clearSelectedSeat());
            }
            dispatch(setSelectedSeat(seat));
            dispatch(setSelectedRoute(routeId));
          } else {
            dispatch(removeSelectedSeat(seat.id));
          }
        }}
      />
    </div>
  );
};

export default Seat;
