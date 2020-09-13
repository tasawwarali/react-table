import React from "react";

export default function TableHeader(props) {
  var sort_class = props.order == "DESC" ? "sorting_desc" : "sorting_asc";
  const items = props.columns.map((item, key) => (
    <th
      key={key}
      className={
        (item.field == props.order_by ? sort_class : "sorting") +
        (item.fixed ? " freeze-col" : "")
      }
      height="88"
      style={item.css}
    >
      {item.name}
    </th>
  ));

  return (
    <thead>
      <tr>
        <th
          className="col-checkbox selectAll freeze-col"
          height="88"
          style={{ zIndex: "99" }}
        >
          <input type="checkbox"></input>
        </th>
        {items}
      </tr>
    </thead>
  );
}
