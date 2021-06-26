import React from "react";

const SeatInfo = () => {
  return (
    <div>
      <h4 className="text-danger text-uppercase">ລາຍລະອຽດຍ່ອນນັ່ງ</h4>
      <div className="seat-info">
        <table className="table">
          <thead>
            <tr>
              <th>Seat</th>
              <th>Class</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>seatno</td>
              <td>class</td>
              <td>500000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeatInfo;
