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

const Seat = ({ seat, departureTimeId, fare, dTime, bookedSeats }) => {
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => state.booking);
  const { selectedSeat, departureTime } = bookingState;
  let selected;
  let booked;

  if (selectedSeat.length >= 1 && departureTime === departureTimeId) {
    const ids = selectedSeat.map((s) => s.id);
    selected = ids.includes(seat.id);
  }

  if (bookedSeats && bookedSeats.length >= 1 && dTime === departureTimeId) {
    const ids = bookedSeats.map((s) => s);
    booked = ids.includes(seat.id);
  }

  return (
    <div className="the-seat">
      <MdEventSeat
        style={{ cursor: "pointer" }}
        color={selected ? "green" : booked ? "red" : "grey"}
        size={40}
        onClick={() => {
          if (booked) {
            alert("ບ່ອນນັງຖືກຈອງແລ້ວ");
          } else if (!selected) {
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
