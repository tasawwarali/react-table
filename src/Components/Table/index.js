import React from "react";
import "../../Styles/Components/table.scss";

import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table-wrapper">
        <table className="capx-data-table" style={{ marginLeft: "329px" }}>
          <TableHeader
            columns={this.props.columns}
            order_by={this.props.order_by}
            order={this.props.order}
          ></TableHeader>
          <TableBody
            columns={this.props.columns}
            report_data={this.props.report_data}
            summery_data={this.props.summery_data}
          ></TableBody>
        </table>
      </div>
    );
  }
}
