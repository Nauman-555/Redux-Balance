// App.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./State/amountSlice";

export default function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between bg-blue-500 py-4 ">
          <div className="mx-9 text-3xl font-bold">Redux</div>
          <ul className="hidden text-white md:flex gap-10 items-center mx-5">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
              Your Balance:{amount}
            </button>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 flex-grow">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(withdraw(100));
            }}
          >
            -
          </button>
          <div>Add item</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(deposit(100));
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
