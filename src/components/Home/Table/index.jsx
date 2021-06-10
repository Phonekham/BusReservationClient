import React from "react";
import { Table } from "reactstrap";

const QueryRouteTable = ({ data }) => {
  return (
    <Table responsive className="lao">
      <thead>
        <tr>
          <th hidden="xs">#</th>
          <th>ເວລາອອກ</th>
          <th>ປະເພດລົດ</th>
          <th>ຄ່າໂດຍສານ</th>
          <th className="route">ສາຍທາງ</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.checkDepartureTime.map((route, i) => (
            <tr key={route.id}>
              <th hidden="xs" scope="row">
                {i + 1}
              </th>
              <td>{route.time}</td>
              <td>{route.busType.type}</td>
              <td>{route.fare}</td>
              <td className="route">{route.route.routeName}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default QueryRouteTable;
