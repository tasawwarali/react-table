import React from "react";
import Table from "./Components/Table";
import "./App.css";
import Pagination from "./Components/Pagination";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [],
        report_data: [],
        summery_data: [],
        order_by: "",
        order: "",
      },
    };
  }
  componentDidMount() {
    axios
      .get(`http://capx_multi.local/api/campaigns`, {
        params: { account_id: 7 },
      })
      .then((res) => {
        const data = res.data.data;
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="capx-primary-table shadow-panel">
          <Table
            columns={this.state.data.columns}
            report_data={this.state.data.report_data}
            summery_data={this.state.data.summery_data}
            order_by={this.state.data.order_by}
            order={this.state.data.order}
          ></Table>
          <Pagination></Pagination>
        </div>
      </div>
    );
  }
}
