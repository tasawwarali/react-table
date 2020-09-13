import React from "react";

export default function Pagination() {
  return (
    <div className="te-pagination">
      <span>
        <div className="selectbox selectbox--standard">
          <button className="selectbox__button visible">
            <span data-testid="undefined-button" style={{ float: "left" }}>
              10
            </span>
          </button>
          <div className="selectbox__dropdown  selectbox__dropdown--singlelevel">
            <ul>
              <li>
                <button id="10">10</button>
              </li>
              <li>
                <button id="25">25</button>
              </li>
              <li>
                <button id="50">50</button>
              </li>
              <li>
                <button id="100">100</button>
              </li>
            </ul>
          </div>
        </div>
      </span>
      <ul className="te-pagination-ul">
        <li>
          <a className="te-pagination-link prev disable-pagination-link">
            <i className="zmdi zmdi-chevron-left"></i>
          </a>
        </li>
        <li>
          <span>
            <span>0</span> to <span>0</span> of <span>0</span>
          </span>
        </li>
        <li>
          <a className="te-pagination-link next disable-pagination-link">
            <i className="zmdi zmdi-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
