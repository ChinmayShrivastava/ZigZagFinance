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
      <td>
        <button className="buy-button bg-gray-400 rounded-2xl py-3">Buy</button>
      </td>
      <td>
        <button className="sell-button">Sell</button>
      </td>
    </>
  );
};

const FundTable = () => {
  return (
    <>
      {/* table */}
      <div className="h-screen w-screen flex justify-center items-center bg-[#01012A]">
        <table className="table py-4 px-2 text-white shadow-2xl rounded-lg rounded-lg overflow-hidden">
          <tr className="bg-[#DA2877] component py-6 px-2 text-gray-400 text-right">
            <th className="px-6 py-6 text-white">Fund Name</th>
            <th className="px-6 py-6 text-white">AUM</th>
            <th className="px-6 py-6 text-white">30d</th>
            <th className="px-6 py-6 text-white">24hr</th>
            <th className="px-6 py-6 text-white"></th>
          </tr>
          {/* <Modal></Modal> */}

          {tableentries.map((entry, index) => (
            <tr
              id={index.toString()}
              className={`w-full bg-gray-700 component py-4 px-6 hover:bg-gray-600 hover:cursor-pointer font-light`}>
              <td className="fund-name px-6 py-6">{entry.fundname}</td>
              <td className="aum px-6 py-6">{entry.aum}</td>
              <td className="this-month px-6 py-6">{entry.thismonth}</td>
              <td className="24-hrs px-6 py-6">{entry.twentyfourhr}</td>
              <td className="buy-sell px-6 py-6 flex gap-2">
                {/* <BuySell /> */}
                <button className="buy-button bg-blue-800 rounded-xl py-3 px-6 hover:bg-blue-700 transition-all">
                  Buy
                </button>
              
                <button className="sell-button bg-gray-500 hover:bg-orange-600 transition-all rounded-xl py-3 px-6">Sell</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default FundTable;
