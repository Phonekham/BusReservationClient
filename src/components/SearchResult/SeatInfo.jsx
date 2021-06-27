import React from "react";

import { useStateValue } from "../../context/seat/provider";

const SeatInfo = () => {
  const [seatData] = useStateValue();
  const { selectedSeat } = seatData;

  return (
    <div>
      <h3 className="text-center">ລາຍລະອຽດບ່ອນນັ່ງ</h3>
      <div className="seat-info">
        <table className="table">
          <thead>
            <tr>
              <th>ເບີບ່ອນັ່ງ</th>
              <th>ຊັ້ນ</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeat &&
              selectedSeat.map((seat) => (
                <tr>
                  <td>{seat.seatNo}</td>
                  <td>25000</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatInfo;
