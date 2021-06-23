import React from "react";
import { MdEventSeat } from "react-icons/md";
import { Card } from "reactstrap";
// import "./Seat.scss";

const Seat = () => {
  return (
    <div class="plane">
      <div class="cockpit">
        <h1>Please select a seat</h1>
      </div>
      <div class="exit exit--front fuselage"></div>
      <ol class="cabin fuselage">
        <li class="row row--2">
          <ol class="seats" type="A">
            <li class="seat">
              <input type="checkbox" id="2A" />
              <label for="2A">2A</label>
            </li>
            <li class="seat">
              <input type="checkbox" id="2B" />
              <label for="2B">2B</label>
            </li>
            <li class="seat">
              <input type="checkbox" id="2D" />
              <label for="2D">2D</label>
            </li>
            <li class="seat">
              <input type="checkbox" id="2E" />
              <label for="2E">2E</label>
            </li>
          </ol>
        </li>
      </ol>
      <div class="exit exit--back fuselage"></div>
    </div>
  );
};

export default Seat;
