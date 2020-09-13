import React from "react";
import TableCell from "../TableCell";

export default function TableBody(props) {
  const summery_row = props.summery_data.map((item) => (
    <tr className="summary-row" key="summery">
      <td
        className="freeze-col col-checkbox"
        height="26"
        style={{ zIndex: "99" }}
      ></td>
      {props.columns.map((item2, key2) => (
        <TableCell
          height="26"
          key={key2}
          column={item2}
          data={item}
        ></TableCell>
      ))}
    </tr>
  ));

  const rows = props.report_data.map((item) => (
    <tr key={item.id}>
      <td
        className="col-checkbox freeze-col"
        height="46"
        style={{ zIndex: "99" }}
      >
        <input type="checkbox"></input>
      </td>
      {props.columns.map((item2, key2) => (
        <TableCell
          height="46"
          key={key2}
          column={item2}
          data={item}
        ></TableCell>
      ))}
    </tr>
  ));

  return (
    <tbody>
      {summery_row}
      {rows}
    </tbody>
  );
}
