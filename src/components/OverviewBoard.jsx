import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./styles/metricBoard.scss";

const OverviewBoard = () => {
  return (
    <div className="metric-board shadow rounded-4">
      <div className="d-flex justify-content-between p-4">
        <span className="total-listing metrics d-flex justify-content-center gap-5 w-100">
          <figure className="shadow">
            <TfiMenuAlt className="ico" />
          </figure>
          <article className="">
            <h6 className="tag">Total Listing</h6>
            <h2 className="tag-amount">56</h2>
          </article>
        </span>
        
      </div>

      <div className="d-flex justify-content-between p-4">
      <div className="vrl"></div>
        <span className="buyer-calls metrics d-flex justify-content-center gap-5 w-100">
          <figure className="shadow">
            <MdAddCall className="ico" />
          </figure>
          <article>
            <h6 className="tag">Buyer Calls</h6>
            <h2 className="tag-amount">149</h2>
          </article>
        </span>
        <div className="vrl"></div>
      </div>

      <div className="p-4">
        <span className="affiliate-earnings metrics d-flex justify-content-center gap-5">
          <figure className="shadow">
            <FaSackDollar className="ico" />
          </figure>
          <article>
            <h6 className="tag">Affiliate Earnings</h6>
            <h2 className="tag-amount">₦153,000</h2>
            <span className="d-flex justify-content-between gap-3 mini-tag">
              <NavLink className="text-decoration-none">
                <small className="bg-success p-2 text-white rounded">
                  Request Payment
                </small>
              </NavLink>
              <span className="d-flex flex-column">
                <small>All time</small>
                <small>₦3,000,520</small>
              </span>
            </span>
          </article>
        </span>
      </div>
    </div>
  );
};

export default OverviewBoard;
