import React from "react";
import Sidebar from "../components/Sidebar";
import TableCake from "../components/TableCake";
import Navbar from "../components/Navbar";
import TableCart from "../components/TableCart";
import Button from "../components/Button";

export default function CakePage() {
  return (
    // BIKIN KALO MISALNYA DI CLICK DARI TABLE CAKE MASUK KE TABLECART TRS DI SAVE KE CART

    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <TableCake />
        <div>
          <TableCart />
          <div className="ml-56 mt-5 ">
            <div className="flex">
              <p className="">Total:</p>
              <p className="ml-[90px]">8000000</p>
            </div>
            <div className="flex">
              <p>Pickup date: </p>
              <input className="ml-10" type="date" required />
            </div>
          </div>
          <div className="flex ml-56 gap-20 items-center">
            <Button text={"Delete item"} />
            <Button text={"Checkout"} />
          </div>
        </div>
      </div>
    </>
  );
}
