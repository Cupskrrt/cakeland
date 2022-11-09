import React from "react";

export default function ManageCake() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-[19px]">
        <p>Cake Name: </p>
        <p>Cake Price: </p>
        <p>Shape</p>
        <p>Oval Size</p>
        <p>Rectangle Size</p>
      </div>
      <div className="flex flex-col gap-5">
        <input type="text" className="rounded-md shadow-md border-[1px]"/>
        <input type="text" className="rounded-md shadow-md border-[1px]"/>
        <select name="cakeShape">
          <option value="Oval">Oval</option>
          <option value="Rectangle">Rectangle</option>
        </select>
        <select name="ovalSize">
          <option value="10 X 10">10 X 10</option>
          <option value="20 X 20">20 X 20</option>
          <option value="30 X 30">30 X 30</option>
        </select>
        <select name="ovalSize">
          <option value="15 Cm">15 Cm</option>
          <option value="20 Cm">20 Cm</option>
          <option value="25 Cm">25 Cm</option>
        </select>
      </div>
    </div>
  );
}
