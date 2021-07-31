import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

const SeatInfo = ({ data }) => {
  const history = useHistory();
  const authState = useSelector((state) => state.auth);
  const { userData } = authState;
  const bookingState = useSelector((state) => state.booking);
  const { selectedSeat } = bookingState;

  const handleContinue = () => {
    if (!userData) {
      alert("ກາລຸນາເຂົ້າສູ່ລະບົບ");
    } else {
      history.push({ pathname: "/booking", state: data });
    }
  };

  return (
    <>
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
                  <td>{seat.floor}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Button color="primary" onClick={() => handleContinue()}>
          ດຳເນີນການຕໍ່
        </Button>
      </div>
    </>
  );
};

export default SeatInfo;
