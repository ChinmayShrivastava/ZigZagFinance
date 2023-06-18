import React from "react";

const tableentries = [
  {
    fundname: "Test Fund",
    aum: "Test Manager",
    thismonth: "10%",
    twentyfourhr: "Test Manager",
    lastsevendays: "10%",
  },
  {
    fundname: "Test Fund",
    aum: "Test Manager",
    thismonth: "10%",
    twentyfourhr: "Test Manager",
    lastsevendays: "10%",
  },
  {
    fundname: "Test Fund",
    aum: "Test Manager",
    thismonth: "10%",
    twentyfourhr: "Test Manager",
    lastsevendays: "10%",
  },
  {
    fundname: "Test Fund",
    aum: "Test Manager",
    thismonth: "10%",
    twentyfourhr: "Test Manager",
    lastsevendays: "10%",
  },
];

const BuySell = () => {
  return (
    <>
      <button className="buy-button">Buy</button>
      <button className="sell-button">Sell</button>
    </>
  );
};

const FundTable = () => {
  return (
    <>
      {/* table */}
      <div className="container">
        <table className="table">
          <tr>
            <th>Fund Name</th>
            <th>AUM</th>
            <th>This Month</th>
            <th>24 hr</th>
            <th>Last 7 days</th>
          </tr>

          {tableentries.map((entry, index) => (
            <tr id={index.toString()}>
              <td className="fund-name">{entry.fundname}</td>
              <td className="aum">{entry.aum}</td>
              <td className="this-month">{entry.thismonth}</td>
              <td className="24-hrs">{entry.twentyfourhr}</td>
              <td className="buy-sell">
                <BuySell />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default FundTable;
