import React from "react";
import { SeatingChart } from "react-seat-charts";

export default class App extends React.Component {
  render() {
    // SeatingChart requires a double nested array of seat objects
    let seats = [
      [
        { seatType: "regular", status: "available", label: "5" },
        { seatType: "regular", status: "available", label: "6" },
      ],
    ];

    // Naming is optional
    let naming = { rows: ["A"], columns: ["1"] };

    // Let there be seats
    let seatingChart = <SeatingChart seats={seats} naming={naming} />;
    return <div>{seatingChart}</div>;
  }
}
