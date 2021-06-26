import React from "react";
import { MdEventSeat } from "react-icons/md";

const SeatSymbol = ({ status, color }) => {
  return (
    <div className="m-3">
      <div className="text-center">
        <MdEventSeat style={{ cursor: "pointer" }} color={color} size={40} />
      </div>
      <p>{status}</p>
    </div>
  );
};

export default SeatSymbol;
