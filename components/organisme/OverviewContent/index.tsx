import Image from "next/image";
import React from "react";
import Categories from "./Categories";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Categories nominal={18500000} icon="ic-desktop">
                  Game
                  <br />
                  Desktop
                </Categories>
                <Categories nominal={5000000} icon="ic-mobile">
                  Game
                  <br />
                  Mobile
                </Categories>
                <Categories nominal={18500000} icon="ic-desktop">
                  Others
                  <br />
                  Categories
                </Categories>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title="Mobile Legend"
                    categories="desktop"
                    item={200}
                    price={200000}
                    status="Pending"
                    image="overview-1"
                  />
                  <TableRow
                    title="Call of Duty"
                    categories="desktop"
                    item={200}
                    price={200000}
                    status="Success"
                    image="overview-2"
                  />
                  <TableRow
                    title="Clash of Clan"
                    categories="desktop"
                    item={200}
                    price={200000}
                    status="Failed"
                    image="overview-3"
                  />
                  <TableRow
                    title="PUBG Legend"
                    categories="desktop"
                    item={200}
                    price={200000}
                    status="Pending"
                    image="overview-4"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
