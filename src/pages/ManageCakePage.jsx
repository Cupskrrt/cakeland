import Button from "../components/Button";
import ManageCake from "../components/ManageCake";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableCake from "../components/TableCake";

export default function ManageCakePage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex">
          <TableCake />
          <div className="flex flex-col items-center ml-80 mt-[25%]">
            <ManageCake />
            <div className="flex gap-10">
              <Button text={"Remove Cake"} />
              <Button text={"Add Cake"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
