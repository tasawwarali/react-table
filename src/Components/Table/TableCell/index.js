import React from "react";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

export default function TableCell(props) {
  var td_classes = props.column.fixed ? "freeze-col" : "";

  td_classes +=
    props.column.format == "StatusCell" ? " te-table-status-col" : "";

  var td_text =
    props.data[props.column.field] === undefined
      ? ""
      : props.data[props.column.field];

  if (props.data[props.column.field] == "--") {
  } else if (props.column.format == "NumberCell") {
    td_text = (
      <NumberFormat
        decimalScale={"2"}
        displayType={"text"}
        thousandSeparator={true}
        value={td_text}
      />
    );
  } else if (props.column.format == "CurrencyCell") {
    td_text = (
      <NumberFormat
        decimalScale={2}
        displayType={"text"}
        prefix={"$"}
        thousandSeparator={true}
        value={td_text}
      />
    );
  } else if (props.column.format == "PercentCell") {
    td_text = !props.data[props.column.field]
      ? props.data[props.column.field].toFixed(2) + "%"
      : "0%";
  } else if (props.column.format == "DateCell") {
    td_text = <Moment format="M/D/YY">{props.data[props.column.field]}</Moment>;
  }

  return (
    <td height={props.height} className={td_classes} style={props.column.css}>
      {props.column.format == "StatusCell" ? (
        <span>
          <div className="dropdown table-status-btn-dropdown pull-left">
            <button
              className={
                "te-table-status-btn dropdown-toggle disabled " +
                props.data["state"]
              }
            >
              <i className="status-btn-icon"></i>
            </button>
          </div>
        </span>
      ) : null}
      {td_text}
    </td>
  );
}
