import React from "react";
import SeatPicker from "react-seat-picker";

const SeatMap = () => {
  const rows = [
    [
      { id: 1, number: 1, isSelected: true },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        isReserved: true,
      },
      { id: 4, number: "4" },
    ],
  ];
  return (
    <SeatPicker
      rows={rows}
      maxReservableSeats={3}
      //   alpha
      visible
      selectedByDefault
    />
  );
};

export default SeatMap;
