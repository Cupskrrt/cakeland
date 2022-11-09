import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { MOCK_DATA_SELECTED_TRANSACTION_HISTORY } from "../utils/data";
import { COLUMNS_SELECTED_HISTORY } from "../utils/columns";

export default function TableSelectedHistory() {
  const columns = useMemo(() => COLUMNS_SELECTED_HISTORY, []);
  const data = useMemo(() => MOCK_DATA_SELECTED_TRANSACTION_HISTORY, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="max-h-[91vh] overflow-auto no-scrollbar">
      <table {...getTableProps()} className="h-auto w-96 rounded-md ml-6 mt-2">
        <thead className="bg-dark-turqoise text-silver">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-turqoise text-center h-10"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}