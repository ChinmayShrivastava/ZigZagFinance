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
      <div className="h-screen w-screen flex justify-center items-center">
        <table className="table py-4 px-2 text-white">
          <tr className=" bg-gray-800 component py-4 px-2 text-gray-400 text-right">
            <th className="px-4 py-2">Fund Name</th>
            <th className="px-4 py-2">AUM</th>
            <th className="px-4 py-2">This Month</th>
            <th className="px-4 py-2">24 hr</th>
            <th className="px-4 py-2">Last 7 days</th>
          </tr>

          {tableentries.map((entry, index) => (
            <tr id={index.toString()} className={` bg-gray-700 component py-4 px-2`}>
              <td className="fund-name px-4 py-2">{entry.fundname}</td>
              <td className="aum px-4 py-2">{entry.aum}</td>
              <td className="this-month px-4 py-2">{entry.thismonth}</td>
              <td className="24-hrs px-4 py-2">{entry.twentyfourhr}</td>
              <td className="buy-sell px-4 py-2">
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
