import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TableSelectedHistory from "../components/TableSelectedTransaction";
import TableHistory from "../components/TableHistory";

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col p-10 pl-[480px]">
          <TableHistory />
          <div className="flex ml-6 my-5">
            <p>Selected ID : </p>
            <p className="ml-3">T9999</p>
          </div>
          <TableSelectedHistory />
          <div className="flex ml-6 my-5">
            <p>Total :</p>
            <p className="ml-16">400000</p>
          </div>
        </div>
      </div>
    </>
  );
}
