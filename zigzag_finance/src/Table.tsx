import React, { useEffect } from "react";
import Modal from "./Modal";

import { useContractRead, useContract } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

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

const Table = () => {
  let { address } = useParams();
  const { contract } = useContract(address);
  const { data, isLoading, error } = useContractRead(contract, "owner");
  const com = useContractRead(contract, "commission");
  const name = useContractRead(contract, "vaultname");
  const fee = useContractRead(contract, "exitfee");

  useEffect(() => {
    // console.log("contract", contract);
    // console.log(data);
  console.log(com.data);

  }, [com]);

  async function handleBuy() {
    const val = (document.getElementById("buy-amt") as HTMLInputElement)!.value;
    const newData = await contract!.call(
        "deposit",
        ["0x4893d3B57Fc519B2f81C35305EBef824E7feFc57", parseInt(val) * 1e9, "[]", "[]"]
    );
  }

  async function handleSell() {
    const newData = await contract!.call(
        "redeem",
    );
  }

  return (
    <>
      {/* table */}

      <div className="h-screen w-screen flex justify-center items-center flex-col bg-[#da2877]">
        <table className="table py-4 px-2 text-white shadow-2xl rounded-lg overflow-hidden">
          <tr className=" bg-gray-800 component py-6 px-2 text-gray-400 text-right">
            <th className="px-6 py-6 text-white">Fund Owner</th>
            <th className="px-6 py-6 text-white">Commission (%)</th>
            <th className="px-6 py-6 text-white">Fund Name</th>
            <th className="px-6 py-6 text-white">Exit Fee (%)</th>
            {/* <th className="px-6 py-6"></th> */}
            <th></th>
          </tr>
          {/* <Modal></Modal> */}

         <th className="px-6 py-6">{data}</th>
         <th className="px-6 py-6">{com.data && parseInt(com.data["_hex"], 16)}</th>
         <th className="px-6 py-6">{name.data}</th>
         <th className="px-6 py-6">{fee.data && parseInt(fee.data["_hex"], 16)}</th>
        </table>
        <div className="buy-sell px-6 py-6 flex gap-2 justify-self-right">
                {/* <BuySell /> */}
                <input id="buy-amt" type="number" placeholder="Amount"
                className="rounded-lg overflow-hidden focus:outline-none px-4 bg-opacity-50 bg-gray-800 py-2 text-white"
                ></input>
                <button className="text-white buy-button bg-[#00C56E] rounded-xl py-3 px-6 hover:bg-[#00E580] transition-all" onClick={handleBuy}>
                  Buy
                </button>

                <button className="text-white sell-button bg-[#FF0000] hover:bg-[#FF6797] transition-all rounded-xl py-3 px-6" onClick={handleSell}>
                  Sell
                </button>
              </div>
      </div>
    </>
  );
};

export default Table;
